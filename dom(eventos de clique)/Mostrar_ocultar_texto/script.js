const botao = document.querySelector('#botao');
const paragrafo = document.querySelector('#paragrafo');

function mostrarOcutarTexto() {
    if(botao.textContent === "Mostrar/Ocultar Texto" && paragrafo.style.display === "inline-block" )  {
        botao.innerHTML= "";
        paragrafo.style.display = 'none';
    } else {
        botao.innerHTML = "Mostrar/Ocultar Texto";
        paragrafo.style.display = 'inline-block';
    }
    
}

botao.addEventListener('click', mostrarOcutarTexto);


/*
Crie um botão que, ao ser clicado, mostra ou esconde um texto.
*/
