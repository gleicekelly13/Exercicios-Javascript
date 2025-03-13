const botao = document.querySelector('#botao');
const paragrafo = document.querySelector('#paragrafo');

function mostrarOcutarTexto() {
    if(paragrafo.style.display === "none" )  {
        paragrafo.style.display = "block"
        botao.textContent = "Ocultar Texto";
        
    } else {
        paragrafo.style.display = "none";
        botao.textContent = "Mostrar Texto";
    }
    
}

botao.addEventListener('click', mostrarOcutarTexto);


/*
Crie um botão que, ao ser clicado, mostra ou esconde um texto.
*/
