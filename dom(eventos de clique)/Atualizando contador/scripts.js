/*
Atualizando um contador
Objetivo: Criar um contador que aumenta e diminui ao clicar nos botões.

Passos:

Crie um <span> que exibe um número inicial (0).
Adicione dois botões: "Aumentar" e "Diminuir".
Ao clicar nos botões, o número deve ser atualizado corretamente.

*/


const contador = document.getElementById('span');
const aumentar = document.getElementById('aumenta');
const diminuir = document.getElementById('diminui');


let numero = 0

function aumentarContador () {
    numero++;  // Primeiro altera o valor
    contador.textContent = numero;  // Depois atualiza o conteúdo do span(contador)
}

function diminuirContador () {
    if(numero > 0) {  //Verificação para o contador não ir abaixo de 0, ou seja, não números negativos
        numero--;
        contador.textContent = numero;
    }
}

aumentar.addEventListener('click', aumentarContador);
diminuir.addEventListener('click', diminuirContador);
