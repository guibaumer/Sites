const span = document.querySelector('.material-symbols-outlined');
const body = document.querySelector('body');
const menu = document.querySelector('#invisible');
const xis = document.querySelector('.fecha-menu')

span.addEventListener('click', function() {
    mostraMenu();
})

xis.addEventListener('click', function() {
    mostraMenu();
})

function mostraMenu() {
    if(menu.style.display !== 'block') { 
    menu.style.display = 'block'
}
else {
    menu.style.display = 'none'
} 
}