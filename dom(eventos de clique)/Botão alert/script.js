//ADICIONA UM NOVO ELEMENTO <h2) A CADA TECLA PRESSIONADA
/*document.body.addEventListener('keydown', (evento) => {  //O próprio evento pode ser passado como parâmetro
    const teclaPressionada = document.createElement('h2');
    teclaPressionada.innerText = `A tecla ${evento.key} foi pressionada!`;
    document.body.appendChild(teclaPressionada); //Exibe a tecla pressionada no body
    console.log(teclaPressionada);  //Exibe a tecla pressionada no console
})

/* `evento.key` extrai o valor da tecla */


//ATUALIZA UM ÚNICO ELEMENTO, SEM CRIAR VÁRIOS <h2>
document.body.addEventListener('keydown', (evento) => {
    let teclaPressionada = document.getElementById('tecla');

    if(!teclaPressionada) {  // Se não existir, cria o <h2>
        teclaPressionada = document.createElement('h2');
        teclaPressionada.id = 'tecla';  // Atribui um id ao elemento criado
        document.body.appendChild(teclaPressionada);  // Adiciona o <h2> ao body, tornando-o visível na página.
    }

    teclaPressionada.innerText = `A tecla ${evento.key} foi pressionada!`;
    console.log(teclaPressionada);
})
