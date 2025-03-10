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
const resetar = document.getElementById('reseta');

let numero = 0

function atualizarContador() {  // Evita código repetitivo ao atualizar o número
    contador.textContent = numero;  // Atualiza o conteúdo do span(contador)
}

function aumentarContador () {
    numero++;  // Primeiro altera o valor
    atualizarContador();
}

function diminuirContador () {
    if(numero > 0) {  //Verificação para o contador não ir abaixo de 0, ou seja, não números negativos
        numero--;
        atualizarContador()
    }
}

function resetarContador() {  // Função que zera o contador
    numero = 0;  
    atualizarContador();
}


aumentar.addEventListener('click', aumentarContador);
diminuir.addEventListener('click', diminuirContador);
resetar.addEventListener('click', resetarContador);
