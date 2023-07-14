window.sr = ScrollReveal({ reset: true });

sr.reveal('.h1', {
    rotate: {x:0, y:30, z: 0},
    duration: 2000,
});
sr.reveal('.p-home', {
    rotate: {x:0, y:0, z: 0},
    duration: 3000,
});
sr.reveal('.menu-h2', {
    rotate: {x:0, y:50, z: 0},
    duration: 2000,
});


const menu = document.querySelector('.menu');
const hidden = document.querySelector('.hidden');

menu.addEventListener('click', () => {
    apareceMenu();
});

function apareceMenu() {
    // if(hidden.style.height === '6rem') {
    //     console.log('sim');
    // } else {
    //     console.log('não');
    // }
    if(hidden.classList.contains('escondido')) {
        hidden.classList.remove('escondido');
        hidden.classList.add('estendido');
    } else {
        hidden.classList.add('escondido');
        hidden.classList.remove('estendido');
    }
}