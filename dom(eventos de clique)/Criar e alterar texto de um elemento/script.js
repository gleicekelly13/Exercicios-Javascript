/*
Exercício 1: Criar e alterar um texto dentro de um elemento <div> no HTML.
*/


// Seleciona os elementos
const divTexto = document.getElementById('texto');
const botao = document.getElementById('botao');

botao.addEventListener('click', () => {  // Adiciona um evento ao botão
    divTexto.innerText = divTexto.innerText === 'Texto Original' ? 'Texto Alterado!' : 'Texto Original';  // Altera o texto da div
});

// Ao clicar no botão, altera o texto da div
