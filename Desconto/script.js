function calculo() {
     
    let custo = document.getElementById('meuInput')
    let n1 = Number(custo.value)
    let divUm = document.getElementById('porcentagem')
    let divDois = document.getElementById('valorDesconto')
    let divTres = document.getElementById('final')
    let titulo = document.getElementById('title')
    
    let desconto = n1 / 10
    let resultado = n1 - desconto
    titulo.innerHTML = `CONCLUSÃO`
    divUm.innerHTML = `O desconto foi de 10% (${desconto} reais).`
    divDois.innerHTML = `O valor era ${n1} reais, mas agora é ${resultado} reais!`
    
}


 /*   let custo = document.getElementById('meuInput')
      let n1 = Number(custo.value)                         */