
function verificar1() {
    acertos1 = 0
   var div1 = document.getElementById('q1')
    var answer1  = document.getElementsByName('a')
    if(answer1[3].checked) {
        div1.textContent  = '1) VOCÊ ACERTOU!'
       acertos1 =+ 1
    } else {
        div1.textContent = '1) ERRADO! TENTE RESPONDER AS OUTRAS QUESTÕES.'
       acertos1 =+ 0
    } div1.textContent = ''
 } 
function verificar2() {
    acertos2 = 0
    var div2 = document.getElementById('q2')
     var answer2 = document.getElementsByName('b')
     if(answer2[2].checked) {
         div2.textContent  = '2) VOCÊ ACERTOU!'
         acertos2 =+ 1
     } else {
         div2.textContent = '2) ERRADO! TENTE RESPONDER AS OUTRAS QUESTÕES.'
         acertos2 =+ 0
     } div2.textContent = ''
 } 
function verificar3() {
    acertos3 = 0
    var div1 = document.getElementById('q1')
    var div2 = document.getElementById('q2')
    var div3 = document.getElementById('q3')
    var div4 = document.getElementById('q4')
    var answer3 = document.getElementsByName('c')
     if(answer3[3].checked) {
         div3.textContent  = '3) VOCÊ ACERTOU!'
          acertos3 =+ 1
     } else {
         div3.textContent = '3) ERRADO! TENTE RESPONDER AS OUTRAS QUESTÕES.'
          acertos3 =+ 0 }
          div3.textContent = '' 
     }
     function verificar4() {
        acertos4 = 0
        var div1 = document.getElementById('q1')
        var div2 = document.getElementById('q2')
        var div3 = document.getElementById('q3')
        var div4 = document.getElementById('q4')
        var answer4 = document.getElementsByName('d')
        if(answer4[1].checked) {
            div4.textContent  = '3) VOCÊ ACERTOU!'
             acertos4 =+ 1
        } else {
            
             acertos4 =+ 0
         }  div4.textContent = ''
    }
     
    /* var ggb = 'RESPOSTAS:\n1) Sucre\n2) América\n3) Inglês\n4) Peru'
     var resultado = acertos1 + acertos2 + acertos3 + acertos4
     var resu = Number(resultado.value)
     div1.textContent ='FIM DE JOGO!'
     div2.textContent =`Número de acertos: ${resultado}`
     if(resultado == 1 || resultado == 0) {
        div3.textContent = 'Foi bem mal. Tente novamente.'
     } else if(resultado == 2) {
        div3.textContent = 'Bom! Dois acertos!'
     } else if(resultado == 3) {
        div3.textContent = 'Ótimo! Três acertos!'
     } else {
        div3.textContent = 'Perfeito! Acertou todas!'
     }
     div4.textContent = `${ggb}`
    } */
    
    function verificar5() {
        acertos5 = 0
        var div1 = document.getElementById('q1')
        var div2 = document.getElementById('q2')
        var div3 = document.getElementById('q3')
        var div4 = document.getElementById('q4')
        var div5 = document.getElementById('q5')
        var answer5 = document.getElementsByName('e')
        if(answer5[3].checked) {
            div4.textContent  = '3) VOCÊ ACERTOU!'
             acertos5 =+ 1
        } else {
            
             acertos5 =+ 0
        }
        div5.textContent = ''
        var ggb = 'RESPOSTAS:\n1) Sucre\n2) América\n3) Inglês\n4) Peru\n5) Venezuela '
        var resultado = acertos1 + acertos2 + acertos3 + acertos4 + acertos5
        var resu = Number(resultado.value)
        div1.textContent ='FIM DE JOGO!'
        div2.textContent =`Número de acertos: ${resultado}`
        if(resultado == 1 || resultado == 0) {
           div3.textContent = 'Foi bem mal. Tente novamente.'
        } else if(resultado == 2) {
           div3.textContent = 'Bom! Dois acertos!'
        } else if(resultado == 3) {
           div3.textContent = 'Ótimo! Três acertos!'
        } else if(resultado == 4) {
            div3.textContent = 'Boa! Quase todas certas!'
        }
        else {
           div3.textContent = 'Perfeito! Acertou todas!'
        }
        div4.textContent = `${ggb}`}
    
 
