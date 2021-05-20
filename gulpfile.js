const { src, dest, watch, parallel, series } = require('gulp');

const scss              = require('gulp-sass');
const removeComments    = require('gulp-strip-css-comments');
const concat            = require('gulp-concat');
const browserSync       = require('browser-sync').create();
const uglify            = require('gulp-uglify-es').default;
const autoprefixer      = require('gulp-autoprefixer');
const imagemin          = require('gulp-imagemin');
const del               = require('del');
const panini            = require('panini');
const plumber           = require("gulp-plumber");
const webpack           = require('webpack');
const webpackStream     = require('webpack-stream');
const gulpif            = require('gulp-if');
const htmlmin           = require('gulp-htmlmin');
const ttf2woff          = require('gulp-ttf2woff');
const ttf2woff2         = require('gulp-ttf2woff2');
const notify            = require("gulp-notify");
const sourcemaps        = require('gulp-sourcemaps');
const rev               = require('gulp-rev');
const revRewrite        = require('gulp-rev-rewrite');
const revDel            = require('gulp-rev-delete-original');
const { readFileSync }  = require('fs');
const cached            = require('gulp-cached');

let isProd = false;

/* Paths */
const srcPath = 'src/';
const distPath = 'dist/';

const path = {
    pathBuild: {
        html:       distPath,
        js:         distPath + "assets/js/",
        jsVendor:   distPath + "assets/js/vendor/",
        css:        distPath + "assets/css/",
        images:     distPath + "assets/images/",
        svg:        distPath + "assets/images/sprites/",
        fonts:      distPath + "assets/fonts/"
    },
    pathSrc: {
        html:       srcPath + "*.html",
        js:         srcPath + "assets/js/*.js",
        jsVendor:   srcPath + "assets/js/vendor/**.js",
        css:        srcPath + "assets/scss/*.scss",
        images:     srcPath + "assets/images/**/*",
        svg:        srcPath + "assets/images/sprites/**.svg",
        fonts:      srcPath + "assets/fonts/"
    },
    pathWatch: {
        html:       srcPath + "**/*.html",
        js:         srcPath + "assets/js/**/*.js",
        css:        srcPath + "assets/scss/**/*.scss",
        images:     srcPath + "assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}",
        svg:        srcPath + "assets/images/sprites/**.svg",
        fonts:      srcPath + "assets/fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    pathClean: "./" + distPath
}

const fonts = () => {
    src(path.pathSrc.fonts + '**/*.{ttf,woff,woff2}')
        .pipe(dest(path.pathBuild.fonts))

    src(path.pathSrc.fonts + '**.ttf')
        .pipe(cached('woffFonts'))
        .pipe(ttf2woff())
        .pipe(dest(path.pathBuild.fonts))
    return src(path.pathSrc.fonts + '**.ttf')
        .pipe(cached('woff2Fonts'))
        .pipe(ttf2woff2())
        .pipe(dest(path.pathBuild.fonts))
        .pipe(browserSync.reload({stream: true}));
}

const browsersync = () => {
    browserSync.init({
        server: {
            baseDir: "./" + distPath
        }
    });
}

const cleanDist = () => {
    return del(path.pathClean);
}

const images = () => {
    return src([path.pathSrc.images, '!'+path.pathSrc.svg])
        .pipe(cached('images'))
        .pipe(gulpif(isProd, imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ])))
        .pipe(dest(path.pathBuild.images))
        .pipe(browserSync.reload({stream: true}));
}

const js = () => {
    src(path.pathSrc.jsVendor, {base: srcPath + 'assets/js/'})
        .pipe(plumber({
            errorHandler : function(err) {
                notify.onError({
                    title:    "JS Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(concat('vendor.min.js'))
        .pipe(gulpif(isProd, uglify()))
        .pipe(dest(path.pathBuild.jsVendor))

    return src(path.pathSrc.js, {base: srcPath + 'assets/js/'})
        .pipe(plumber({
            errorHandler : function(err) {
                notify.onError({
                    title:    "JS Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))

        .pipe(gulpif(!isProd, sourcemaps.init()))
        .pipe(gulpif(isProd, 
            webpackStream({
            mode: "production",
            output: {
                filename: 'app.js',
            },
            module: {
                rules: [{
                    test: /\.(js)$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                    presets: ['@babel/preset-env']
                    }
                }]
            }
            }),
            webpackStream({
                mode: "development",
                output: {
                    filename: 'app.js',
                }
            })
        ))
        .pipe(gulpif(isProd, uglify()))
        .pipe(gulpif(!isProd, sourcemaps.write('.')))
        .pipe(dest(path.pathBuild.js))
        .pipe(browserSync.reload({stream: true}));
}

const styles = () => {
    return src(path.pathSrc.css, {base: srcPath + "assets/scss/"})
        .pipe(plumber({
            errorHandler : function(err) {
                notify.onError({
                    title:    "SCSS Error",
                    message:  "Error: <%= error.message %>"
                })(err);
                this.emit('end');
            }
        }))
        .pipe(gulpif(!isProd, sourcemaps.init()))
        .pipe(gulpif(!isProd, 
            scss({outputStyle: 'compressed',  sourcemap:true}),
            scss({outputStyle: 'compressed'}))
        )

        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(removeComments())
        .pipe(gulpif(!isProd, sourcemaps.write('.')))
        .pipe(dest(path.pathBuild.css))
        .pipe(browserSync.stream());
}

const html = () => {
    panini.refresh();
    return src(path.pathSrc.html, {base: srcPath})
        .pipe(plumber())
        .pipe(panini({
            root:       srcPath,
            layouts:    srcPath + 'layouts/',
            partials:   srcPath + 'partials/',
            helpers:    srcPath + 'helpers/',
            data:       srcPath + 'data/'
        }))
        .pipe(htmlmin({
			collapseWhitespace: true
		}))
        .pipe(dest(path.pathBuild.html))
        .pipe(browserSync.reload({stream: true}));
}

const saveFiles = () => {
    return src(distPath + '**/*.{css,js,webp,eot,woff, woff2}', {base: distPath})
        .pipe(rev())
        .pipe(dest(distPath))
        .pipe(revDel())
        .pipe(rev.manifest('rev.json'))
        .pipe(dest(distPath));
};

const reWrite = () => {
    const manifest = readFileSync(distPath + 'rev.json');

    return src(distPath + '**/*.html')
        .pipe(revRewrite({ manifest }))
        .pipe(dest(distPath));
}

const watching = () => {
    watch([path.pathWatch.html], html);
    watch([path.pathWatch.css], styles);
    watch([path.pathWatch.js], js);
    watch([path.pathWatch.images], images);
    watch([path.pathWatch.fonts], fonts);
}

const toProd = (done) => {
    isProd = true;
    done();
};

const buildProject = series(cleanDist, parallel(styles, js, images, html, fonts));
const watchProject = parallel(buildProject, watching, browsersync);
const cacheProject = series(saveFiles, reWrite);

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(toProd, buildProject, cacheProject);
exports.default = watchProject;