function clicar() {
    const teste = document.querySelector('#teste1');
    const ul = teste.querySelector('ul');
    //ul.innerHTML = "<li>Item alterado</li>"; //Alterou o conteúdo do 'ul'.
    ul.innerHTML = ul.innerHTML + "<li>Item Alterado</li>" //Altera e adiciona o conteúdo no 'ul'.
    //ul.children[0].innerHTML ="Item<strong> Alterado</strong>!"

    //ul.outerHTML = "<strong>Aterado!</strong>"; //pega o elemento externo e altera todo o elemento, é pouco utilizado.

    console.log(ul.innerHTML); //Conteúdo que tem dentro do elemento, neste caso dentro do "ul"
    
} 

//-----------------------------------------------------------------------------//
//Manipulando elementos 2
/*function clicar() {
    const teste = document.querySelector('#teste1');
    const ul = teste.querySelector('ul');

    //ul.children[0].append("(alterado)"); // o append apenas adiciona
