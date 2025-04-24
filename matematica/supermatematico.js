var respostaCorreta;
function equacao() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const operacoes = ['+', '-', 'x', '/'];
    const operacao = operacoes.sort(() => Math.random() - 0.5)[0];
   ; 

    switch (operacao) {
        case '+':
            respostaCorreta = Math.round(num1 + num2);
            break;
        case '-':
            respostaCorreta = Math.round(num1 - num2);
            break;
        case 'x':
            respostaCorreta = Math.round(num1 * num2);
            break;
        case '/':
            respostaCorreta = (num1 / num2).toFixed(2); // Divisão com duas casas decimais
            break;
        }
    
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    document.getElementById("operacao").innerHTML = operacao;
    document.querySelector(".escondido").style.visibility = "visible";
    document.querySelector(".escondido2").style.visibility = "visible";
   
}
function verificar() {
    var resposta = document.getElementById("resposta").value
 document.getElementById("resposta").value
    resposta = document.getElementById("resposta").value;
    if (resposta == respostaCorreta) {
        document.getElementById("answer").textContent = "Parabéns! Você acertou!";
    } else {
        document.getElementById("answer").textContent = "Que pena! Você errou. A resposta correta é " + respostaCorreta;
    }    
}