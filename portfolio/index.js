const spanMenu = document.querySelector('.material-symbols-outlined-menu');
const spanClose = document.querySelector('.material-symbols-outlined-close');
const hidden = document.querySelector('.hidden');

console.log(spanClose, spanMenu, hidden)

spanMenu.addEventListener('click', () => {
    if(hidden.style.display = 'none') {
        hidden.style.display = 'flex'
    }
});

spanClose.addEventListener('click', () => {
    if(hidden.style.display = 'flex') {
        hidden.style.display = 'none'
    } else {
        hidden.style.display = 'flex'
    }
});