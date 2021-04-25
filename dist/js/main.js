const menuBtn = document.querySelector('.menu_btn');
const hamburger = document.querySelector('.menu_btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');

        showMenu = false;
    }
}