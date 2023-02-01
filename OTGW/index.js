const span2 = document.querySelector('.span-hidden-menu');
let largura = window.innerWidth;
const menu2 = document.querySelector('.hidden-menu');
const xis2 = document.querySelector('#xis-2')
const span = document.querySelector('.material-symbols-outlined');
const body = document.querySelector('body');
const menu = document.querySelector('#invisible');
const xis = document.querySelector('.fecha-menu')

span.addEventListener('click', function() {
    menuEscondido();
});

xis.addEventListener('click', function() {
    menuEscondido();
});

// span2.addEventListener('click', function() {
//     if(largura > 320) return;
//     if(largura <= 320) menuEscondido();
// });

function mostraMenu() {
    if(menu.style.display !== 'block') { 
    menu.style.display = 'block'
}
else {
    menu.style.display = 'none'
} 
}



 function menuEscondido() {
         if(menu2.style.display !== 'flex') { 
            menu2.style.display = 'flex';
         }
         else {
            menu2.style.display = 'none'
         } 
        
}
