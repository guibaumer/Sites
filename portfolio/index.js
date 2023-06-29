const spanMenu = document.querySelector('.material-symbols-outlined-menu');
const spanClose = document.querySelector('.material-symbols-outlined-close');
const hidden = document.querySelector('.hidden');
const linksParaDesaparecer = document.querySelectorAll('.link-desaparecer');

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

for(const a of linksParaDesaparecer) {
    a.addEventListener('click', () => {
        hidden.style.display = 'none'
    });
}