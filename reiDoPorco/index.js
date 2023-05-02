const span = document.querySelector('.material-symbols-outlined-1');
const divSpan = document.querySelector('.div-span');
const lista = document.querySelector('.lista');


span.addEventListener('click', () => {
    if(divSpan.style.width === '500px') {
        divSpan.style.width = '50px';
        lista.style.display = 'none';
        setTimeout(() => {
            divSpan.style.background = 'none'
        }, 390)
    } 
    else {
    divSpan.style.width = '500px'
    divSpan.style.backgroundColor = 'black'
    setTimeout(() => {
        lista.style.display = 'block';
    }, 270)
    }
    // divSpan.style.backgroundColor = 'black'
});