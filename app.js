const overlay = document.querySelector('#overlay');
const openMenu = document.querySelector('#open-menu');
const menu = document.querySelector('#menu');
const closeMenu = document.querySelector('#close-menu');


openMenu.addEventListener('click', () => {
    menu.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
    menu.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log('clicked')
})