const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const nuvem = document.querySelector('.clouds');
const section = document.querySelector('.container');
const turtle = document.querySelector('.turtle');
const iniciar = document.querySelector('.iniciar');
const output = document.querySelector('.output');
const marioId = document.querySelector('#mario-id');
const bullet = document.querySelector('.bullet-bill');


setTimeout(() => {
    bullet.style.display = 'block';
    bullet.style.animation = 'bullet-animation 2s infinite ease-in';
    console.log('ok');
}, 5000);
setTimeout(() => {
    bullet.style.display = 'none';
}, 9000);

// Altura da viewport multiplicada por 1% para obter um valor para vh
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }); 
///////////////////////////////////////////////////

// bullet.style.animation = 'bullet-animation 2.5s infinite ease-in';

marioId.src = 'imgs/mario-png.png'
mario.classList.add('parado');
let temporizador = 3;
setInterval(() => {
    temporizador -= 1;
    output.innerHTML = temporizador
}, 1000);

function start() {
    marioId.src = 'imgs/supermario_knocmls3.gif'
    mario.classList.remove('parado');
    tubo.style.display = 'none';
    nuvem.style.display = 'block'; 
    iniciar.style.display = 'none';
    let tempo = 2000;
if(window.innerWidth <= 410) tempo = 1300;
if(window.innerWidth > 410 && window.innerWidth <= 700) tempo = 1400;
if(window.innerWidth > 700 && window.innerWidth < 850) tempo = 1600;

let segundos = 0;
let timer = setInterval(() => {
    segundos++;
}, tempo)


///////////////////////////////////////////////////
function pular() {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 700)
}
const loop = setInterval(() => {
    const posicaoTubo = tubo.offsetLeft; 
    const posicaoTurtle = turtle.offsetLeft;
    const posicaoNuvem = nuvem.offsetLeft; 
    const posicaoBill = bullet.offsetLeft;
    const posicaoMario = Number(window.getComputedStyle(mario).bottom.replace('px', ''))
    //
    function morreu() {
        clearInterval(timer);
        mensagemMorte();
        pontuar(segundos);
        tubo.style.animation = 'none';
        tubo.style.left = `${posicaoTubo}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;
        mario.src = './imgs/mario-morto.webp';
        mario.style.width = '80px';
        mario.style.left = '59px'
        nuvem.style.animation = 'none'
        nuvem.style.left = `${posicaoNuvem}px`;
        clearInterval(loop);
    }
    //
    if(posicaoTubo <= 129 && posicaoMario < 112 && posicaoTubo > 0) {
        clearInterval(timer);
        mensagemMorte();
        pontuar(segundos);
        tubo.style.animation = 'none';
        tubo.style.left = `${posicaoTubo}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;
        mario.src = './imgs/mario-morto.webp';
        mario.style.width = '80px';
        mario.style.left = '59px'
        nuvem.style.animation = 'none'
        nuvem.style.left = `${posicaoNuvem}px`;
        clearInterval(loop);
    }
    if(posicaoMario > 30 && posicaoTurtle <= 102 && posicaoTurtle > 0) {
        // 129
        morreu()
        turtle.style.left = `${posicaoTurtle}px`;
        turtle.style.animation = "none";
    }
    if(posicaoMario < 90 && posicaoBill <= 138 && posicaoBill > 0) { //-75
        console.log('ah')
        morreu();
        bullet.style.left = `${posicaoBill}px`;
        bullet.style.animation = 'none';
    }
    // if(segundos >= 2) {
    //     turtle.style.display = 'block';
    //     tubo.style.display = 'none';
    //     turtle.style.animation = 'turtle-animacao-completa 3s infinite'
    //     turtle.style.animationTimingFunction = 'linear'
    // } 

    // if(segundos >= 10) {
    //    console.log('ganhou');
    //    clearInterval(timer);
    //    clearInterval(loop);
    //    window.location.href = 'fase2.html'
    // }

}, 10);
function mensagemMorte() {
    const div = document.createElement('div');
    div.classList.add('div-fim')
    const p = document.createElement('p');
    const span = document.createElement('span');
    span.classList.add('material-symbols-outlined');
    span.innerText = 'restart_alt';
    p.innerText = 'VOCÊ MORREU!';
    div.appendChild(p);
    div.appendChild(span);
    section.appendChild(div);
    reiniciar();
}
function reiniciar() {
    const restart = document.querySelector('.material-symbols-outlined');
    restart.addEventListener('click', () => {
        document.location.reload();
    });
}
function pontuar(seg) {
    const div = document.createElement('div');
    if(seg < 1 && window.innerHeight > 425) {
     div.classList.add('ruim')   
    } else {
     div.classList.add('pontos');
     div.innerText = `SUA PONTUAÇÃO: ${Math.floor(seg)}`;
    }
    const divFim = document.querySelector('.div-fim')
    divFim.appendChild(div)
}

document.addEventListener('keydown', pular);
document.addEventListener('click', pular);
}

setTimeout(() => {
    start();
}, 3000) 