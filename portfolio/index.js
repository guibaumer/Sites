const spanMenu = document.querySelector('.material-symbols-outlined-menu');
const spanClose = document.querySelector('.material-symbols-outlined-close');
const hidden = document.querySelector('.hidden');

console.log(spanClose, spanMenu, hidden)

spanMenu.addEventListener('click', () => {
    if(hidden.style.display = 'none') {
        hidden.style.display = 'block'
    }
});

spanClose.addEventListener('click', () => {
    if(hidden.style.display = 'block') {
        hidden.style.display = 'none'
    } else {
        hidden.style.display = 'block'
    }
});