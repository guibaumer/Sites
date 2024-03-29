const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const nuvem = document.querySelector('.clouds');
const section = document.querySelector('.container');
const turtle = document.querySelector('.turtle');
const iniciar = document.querySelector('.iniciar');
const output = document.querySelector('.output');
const output2 = document.querySelector('.seconds');
// const marioId = document.querySelector('#mario-id');

// Altura da viewport multiplicada por 1% para obter um valor para vh
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }); 
///////////////////////////////////////////////////
mario.src = 'imgs/mario-png.png'
mario.classList.add('parado');
let temporizador = 3;
setInterval(() => {
    temporizador -= 1;
    output.innerHTML = temporizador
}, 1000);

function start() {
    mario.src = 'imgs/supermario_knocmls3.gif'
    mario.classList.remove('parado');
    tubo.style.display = 'block';
    nuvem.style.display = 'block'; 
    iniciar.style.display = 'none';
    let tempo = 2000;
if(window.innerWidth <= 410) tempo = 1300;
if(window.innerWidth > 410 && window.innerWidth <= 700) tempo = 1400;
if(window.innerWidth > 700 && window.innerWidth < 850) tempo = 1600;

let segundos = 0;
let timer = setInterval(() => {
    segundos++;
}, tempo);

let segundosReais = 0;
let pontosSegundos = setInterval(() => {
    segundosReais++;
    output2.innerHTML = segundosReais;
}, 1000);


///////////////////////////////////////////////////
function pular() {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 700)
}
const loop = setInterval(() => {
    const posicaoTubo = tubo.offsetLeft; 
    const posicaoNuvem = nuvem.offsetLeft; 
    const posicaoMario = Number(window.getComputedStyle(mario).bottom.replace('px', ''))
    if(posicaoTubo <= 129 && posicaoMario < 112 && posicaoTubo > 0) {
        clearInterval(timer);
        mensagemMorte();
        pontuar(segundosReais);
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
        clearInterval(pontosSegundos);
    }
    if(segundos >= 5) turtle.style.display = 'block'
    if(segundos >= 10) {
        tubo.style.animation = 'none';
    tubo.style.left = `${posicaoTubo}px`;
    nuvem.style.animation = 'none'
    nuvem.style.left = `${posicaoNuvem}px`;
    mario.src = 'imgs/pngegg.png';
    mario.classList.add('mario-vitoria');
    nuvem.style.animation = 'none';
    turtle.style.animation = 'none';
       clearInterval(timer);
       clearInterval(loop);
       setTimeout(() => {
       window.location.href = 'fase2.html'
       }, 3000)
    }

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
    })
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


