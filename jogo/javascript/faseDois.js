const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const nuvem = document.querySelector('.clouds');
const section = document.querySelector('.container');
const turtle = document.querySelector('.turtle');
const iniciar = document.querySelector('.iniciar');
const output = document.querySelector('.output');
const output2 = document.querySelector('.seconds');
const marioId = document.querySelector('#mario-id');
const billBala = document.querySelector('.bill-img');
let estado;

// Altura da viewport multiplicada por 1% para obter um valor para vh
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }); 
///////////////////////////////////////////////////
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
    const posicaoTurtle = turtle.offsetLeft;
    const posicaoNuvem = nuvem.offsetLeft; 
    const posicaoBill = billBala.offsetLeft;
    const posicaoMario = Number(window.getComputedStyle(mario).bottom.replace('px', ''))
    
    function morreu() {
        estado = 'MORTO';
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
        turtle.style.animation = 'none';
        turtle.style.left = `${posicaoTurtle}px`;
        // billBala.style.animation = 'none';
        clearInterval(loop);
        clearInterval(pontosSegundos);
    }

    //////////////////////MORTES/////////////////////

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
        estado = 'MORTO';
    }
    if(posicaoMario > 30 && posicaoTurtle <= 102 && posicaoTurtle > 0) {
        morreu()
        turtle.style.animation = "none";
        turtle.src = 'imgs/turtle-png.png';
        turtle.style.left = `${posicaoTurtle}px`;
    }
    if(posicaoMario < 90 && posicaoBill <= 135 && posicaoBill > 0) { //-60
        console.log(posicaoBill);
        morreu();
        billBala.style.animation = 'none';
        billBala.style.display = 'block'
        billBala.style.left = `${posicaoBill}px`;
    }
    ///////////////////////////////////////////////////////

    if(segundos === 2) {
        tartarugaAlta()
    } 
}, 10);

setTimeout(() => {
    if(estado !== 'MORTO') enemies();
}, 3000);


const array = [7];
let primeira = true;
function enemies() {
    setInterval(() => {
        if(estado === 'MORTO') clearInterval(loop);
    }, 10)
     const loop = setInterval(() => {
        function geraNumero() {
            function aleatorio(min = 1, max = 3) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let n = aleatorio();
        if(primeira) {
            while(n === 1) n = aleatorio();
        }
        while(array[array.length - 1] === n) {
            n = aleatorio();
        };
        array.push(n);
        primeira = false;
        return n;
        }
        let indice = geraNumero();
    if(indice === 1) {
        console.log('tartaruga alta');
        tartarugaAlta();
    } else if(indice === 2) {
        console.log('tubo')
        animacaoDotubo();
    } else if(indice === 3) {
        console.log('bill')
        ativaBill();
    }
    }, 4000);
}
function tartarugaAlta() {
    turtle.style.display = 'block';
    tubo.style.display = 'none';
    turtle.style.animation = 'turtle-animacao-completa 3s 1';
    turtle.style.animationTimingFunction = 'linear';
    setInterval(() => {        
        if(estado === 'MORTO') {
            clearTimeout(loopMorte);
        }
    }, 10)
    const loopMorte = setTimeout(() => {
        turtle.style.display = 'none';
        turtle.style.animation = 'none';
    }, 3000);
};
function animacaoDotubo() {
    let tempo;
    if(window.innerWidth <= 410) tempo = "1.3s";
    if(window.innerWidth > 410 && window.innerWidth <= 700) tempo = "1.4s";
    if(window.innerWidth > 700 && window.innerWidth < 850) tempo = "1.6s";
    if(window.innerWidth >= 850) tempo = "2.0s"
    turtle.style.display = 'none';
    tubo.style.display = 'block';
    turtle.style.animation = 'none';
    tubo.style.animation = `tubo-animacao ${tempo} 2`;
    tubo.style.animationTimingFunction = 'linear';
    // tubo.style.animationIterationCount = '1';
    let tempoMil = tempo.replace('.', '');
    tempoMil = tempoMil.replace('s', '');
    tempoMil = Number(tempoMil * 100);
    if(tempoMil === 1600) {
        const loopDead = setTimeout(() => {
            tubo.style.display = 'none';
        }, tempoMil);
        setInterval(() => {
            if(estado === 'MORTO') {
            clearTimeout(loopDead)
            }   
        }, 10);
    } else {
        const loopDead = setTimeout(() => {
            tubo.style.display = 'none';
        }, (tempoMil * 2));
        setInterval(() => {
            if(estado === 'MORTO') {
            clearTimeout(loopDead)
            }   
        }, 10)
    }
    
};
function ativaBill() {
    // if(window.inner)
    let tempo = 4000;
    turtle.style.display = 'none';
    turtle.style.animation = 'none';
    tubo.style.display = 'none';
    tubo.style.animation = 'none';

    billBala.style.display = 'block';
    billBala.style.animationName = 'bullet-animation';
    billBala.style.animationTimingFunction = 'ease-in';
    // billBala.style.animationTimingFunction = 'linear';
    billBala.style.animationIterationCount = '2';
    if(window.innerWidth <= 530) {
        billBala.style.animationDuration = '1.5s';
        tempo = 3000;
        console.log('aqui');
    } else if(window.innerWidth > 530 && window.innerWidth <= 600) {
        billBala.style.animationDuration = '1.4s';
        tempo = 2800;
    }else {
        billBala.style.animationDuration = '2s';
    }


    const disapear = setTimeout(() => {
        billBala.style.display = 'none';
        billBala.style.animation = 'none';
    }, tempo);
    
    setInterval(() => {        
        if(estado === 'MORTO') clearTimeout(disapear);
    }, 10)
}
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