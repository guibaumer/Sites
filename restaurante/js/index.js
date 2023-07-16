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
    if(hidden.classList.contains('escondido')) {
        hidden.classList.remove('escondido');
        hidden.classList.add('estendido');
        menu.style.rotate = '90deg';
    } else {
        hidden.classList.add('escondido');
        hidden.classList.remove('estendido');
        menu.style.rotate = '0deg';
    }
}

const as = document.querySelectorAll('.header-el-hidden');
for (const a of as) {
    a.addEventListener('click', () => {
        hidden.classList.remove('estendido');
        hidden.classList.add('escondido');
    });
}

