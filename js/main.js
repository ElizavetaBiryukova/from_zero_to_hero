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
