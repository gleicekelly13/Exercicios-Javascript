document.body.addEventListener('keydown', (evento) => {  //O próprio evento pode ser passado como parâmetro
    const teclaPressionada = document.createElement('h2');
    teclaPressionada.innerText = `A tecla ${evento.key} foi pressionada!`;
    document.body.appendChild(teclaPressionada); //Exibe a tecla pressionada no body
    console.log(teclaPressionada);  //Exibe a tecla pressionada no console
})

/* `evento.key` extrai o valor da tecla */
