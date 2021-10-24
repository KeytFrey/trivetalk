let burger = document.querySelector('.burger')
let header = document.querySelector('header')
let iconClose = document.querySelector('.icon-close')

window.addEventListener('click', ()=> {

    if (window.innerWidth <= 1021) {
        header.style.display = 'flex'
        iconClose.style.display = 'flex'
    }
});
