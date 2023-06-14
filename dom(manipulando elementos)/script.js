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
    //ul.children[0].innerHTML += "(alterado)"; //o innerHTML pega todo o conteúdo e substitui

    let newLi =document.createElement("li");
    newLi.innerText = "Item adicionado";

    ul.prepend(newLi); //Adiciona o texto no começo
} */

//-----------------------------------------------------------------------------//
//Manipulando elementos 3
function clicar() {
    const teste = document.querySelector('#teste1');
    const ul = teste.querySelector('ul');
    
    /*const newButton = document.createElement('button');
    newButton.innerHTML = "Botão";

    ul.before(newButton);  

    let newUl = document.createElement('ul');
    
    for(let i = 0; i<5; i++) {
        let newLi = document.createElement('li'); // cria os 'li'
        newLi.innerHTML = "Item Adicionado "; //adiciona dentro do 'li'
        newUl.append(newLi) //adiciona os 'li' dentro do 'ul'
    }

    ul.after(newUl);
} 




