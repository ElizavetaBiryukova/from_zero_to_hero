    //menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    const navList = document.querySelector('.main-nav__list');

    burger.addEventListener('click', () => {
        nav.classList.toggle('main-nav--open');
        burger.classList.toggle('burger--open');
    });

    navList.addEventListener('click', () => {
        nav.classList.remove('main-nav--open');
        burger.classList.remove('burger--open');
    });

    //slider
    const prevBtn = document.querySelector('.slider__button--prev');
    const nextBtn = document.querySelector('.slider__button--next');
    const sliders = document.querySelectorAll('.slider__slide');

    let index = 0;

const activeSlide = n => {
    sliders.forEach(element => {
        element.classList.add('visually-hidden');
    });
    sliders[n].classList.remove('visually-hidden');
};

const nextSlide = () => {
    if (index == sliders.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
};

nextBtn.addEventListener('click', nextSlide);

const prevSlide = () => {
    if (index == 0) {
        index = sliders.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
};

prevBtn.addEventListener('click', prevSlide);
