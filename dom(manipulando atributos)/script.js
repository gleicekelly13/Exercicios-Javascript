function clicar () {
    //const input = document.querySelector('input');

    /*console.log(input.getAttribute('type')); //pega e mostra o que tem no atributo

    if(input.hasAttribute('placeholder')) { //Para saber se tem o atributo
        console.log('Tem placeholder');
    } else {
        console.log('Não tem placeholder...');
    } 

    input.setAttribute('placeholder', 'Placeholder alterado'); //Coloca ou altera o atributo */

    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');
    //input.setAttribute('type', 'text'); 

    if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        botao.innerText = "Mostrar Senha";
    } else {
        input.setAttribute('type', 'text');
        botao.innerText = "Ocultar Senha";
    }
} 
