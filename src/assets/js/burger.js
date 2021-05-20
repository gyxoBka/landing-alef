const burger = document.querySelector('.burger');
const burgerShadow = document.querySelector('.nav__shadow');
const body = document.querySelector('body');

if(burger){
    burger.addEventListener("click", function(e){

        body.classList.toggle('show-sidebar');
        e.preventDefault();
    });
}

if(burgerShadow){
    burgerShadow.addEventListener("click", function(e){

        body.classList.toggle('show-sidebar');
        e.preventDefault();
    });
}