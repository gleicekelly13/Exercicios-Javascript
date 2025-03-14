/*
Crie um botão que altera o fundo e a cor do texto da página ao ser clicado.
*/

const titulo = document.querySelector('#titulo');
const botao = document.querySelector('#botao');
const body = document.body;

/*function mudarTema() {
    const corAtual = getComputedStyle(body).backgroundColor;  // Obtém a cor real do fundo
    const corAtualTitulo = getComputedStyle(titulo).color;  // Obtém a cor real do título

    if(corAtualTitulo === 'rgb(0, 0, 0)' && corAtual === 'rgb(255, 255, 255)' && botao.textContent === 'Dark mode') {
        titulo.style.color = '#dad5d5';
        body.style.backgroundColor = "#3a3939";
        botao.textContent = 'Light mode'
    } else {
        titulo.style.color = '#000';
        body.style.backgroundColor = '#fff';
        botao.textContent = 'Dark mode';
    }
    
}
*/

function mudarTema () {
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')) {
        botao.textContent = 'Light mode';
    } else {
        botao.textContent = 'Dark mode';
    }
}

botao.addEventListener('click', mudarTema);
