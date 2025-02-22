/*
Filtre as tarefas que já foram concluídas
*/

const tarefas = [
    { tarefa: "Estudar JavaScript", concluida: true },
    { tarefa: "Fazer exercícios", concluida: false },
    { tarefa: "Ler um livro", concluida: true },
    { tarefa: "Organizar a casa", concluida: false }
  ];

// filter: Seleciona as tarefas concluídas (mantém os objetos inteiros).
let tarefas_concluidas = tarefas.filter(tarefa => tarefa.concluida);
console.log(tarefas_concluidas);

//map: Retorna um novo array contendo apenas o valor da propriedade tarefa, extrai apenas o valor da propriedade tarefa
let descricao_tarefas_concluidas = tarefas_concluidas.map(tarefa => tarefa.tarefa);
console.log(descricao_tarefas_concluidas) 


/*Também pode encadear o método map() após o método filter()

let tarefas_concluidas = tarefas.filter(tarefa => tarefa.concluida).map(tarefa => tarefa.tarefa);
console.log(tarefas_concluidas);


Pense que o filter é como separar uma cesta com apenas as frutas maduras (tarefas concluídas). 
Agora, você quer só os nomes das frutas, sem carregar as frutas inteiras — isso é o trabalho do map.

*/
