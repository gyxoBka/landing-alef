const scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('resize', () => {
    checkScrollVisibility();
}, true);

document.addEventListener("DOMContentLoaded", () => {
    checkScrollVisibility();
});

function checkScrollVisibility() {
    if(document.body.clientHeight > window.innerHeight)
    scrollBtn.classList.remove('scroll-btn_hidden')
else    
    scrollBtn.classList.add('scroll-btn_hidden')
}

scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const scrollTo = scrollBtn.getAttribute('href');

    document.querySelector(scrollTo).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});