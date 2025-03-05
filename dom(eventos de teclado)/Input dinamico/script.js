// Captura os elementos
const texto = document.querySelector('#texto');
const paragrafo = document.querySelector('#paragrafo')

//Cria a função separadamente
function atualizarParagrafo () {  
    paragrafo.textContent = texto.value;  //texto.value representa o que está sendo digitado, ou seja, o valor dentro do input
}

// Passa apenas o nome da função como referência dentro do addEventListener.
texto.addEventListener('input', atualizarParagrafo)


// Método que cria a função dentro do evento
// Adiciona o evento 'input' para capturar cada caractere digitado
/*texto.addEventListener('input', function () {  // Utiliza função anônima
    paragrafo.textContent = texto.value
}) */
