let nav             = document.querySelector('nav');
let colorBlinder    = document.querySelector('.color-blinder');
let burger          = document.querySelector('.burger-wrapper');
let closer          = document.querySelector('.close-toggle');

burger.addEventListener('click', () => {
    nav.classList.add('close-nav');
    colorBlinder.classList.add('color-blinder-show');
});

closer.addEventListener('click', () => {
    nav.classList.remove('close-nav');
    colorBlinder.classList.remove('color-blinder-show');
});