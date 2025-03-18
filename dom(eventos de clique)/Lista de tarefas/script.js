/*
Lista de tarefas (To-Do List)

Crie um campo de texto e um botão "Adicionar".
Ao clicar no botão, adicione o texto digitado a uma lista (<ul>).
Cada item deve ter um botão "Remover" que exclui o item ao ser clicado.
*/

const tarefa = document.getElementById('texto');
const addTarefa = document.getElementById('add');
const lista = document.getElementById('lista');

function criarTarefa () {
    if(tarefa.value.trim() !== '') {
        const newLi = document.createElement('li');
        newLi.textContent = tarefa.value; 

        const buttonRemover = document.createElement('button');
        buttonRemover.textContent = 'Remover';

        buttonRemover.addEventListener('click', () => {
            newLi.remove();
        })

        newLi.appendChild(buttonRemover);
        lista.appendChild(newLi);
    
        tarefa.value = "";
    }
    
}

addTarefa.addEventListener('click', criarTarefa);

// Adicionar tarefa ao pressionar Enter
tarefa.addEventListener('keypress', (event) => {
    if(event.key === "Enter") {
        criarTarefa();
    }
})

// `textContent` define o texto dentro de um elemento de forma mais prática, simples e eficiente
