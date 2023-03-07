const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const nuvem = document.querySelector('.clouds');
const section = document.querySelector('.container');

let segundos = 0;
let timer = setInterval(() => {
    segundos++;
    console.log(segundos)
}, 2000)

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
    // let pontos = (seg / 2).toFixed(0);
    const div = document.createElement('div');
    div.classList.add('pontos');
    div.innerText = `SUA PONTUAÇÃO: ${Math.floor(seg)}`;
    const divFim = document.querySelector('.div-fim')
    divFim.appendChild(div)
    
}

document.addEventListener('keydown', pular);
document.addEventListener('click', pular);




