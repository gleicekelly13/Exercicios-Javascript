/*
Filtrando Tarefas Concluídas
Dado um array de tarefas com propriedades descricao e concluida, 
use o forEach para imprimir apenas as tarefas concluídas.
Sua tarefa: imprimir as descrições das tarefas concluídas.
*/

const tarefas = [
    { descricao: "Comprar pão", concluida: true },
    { descricao: "Lavar a louça", concluida: false },
    { descricao: "Estudar JavaScript", concluida: true },
  ];

tarefas.forEach(tarefa => {
    let tarefasConcluidas = tarefa.concluida === true
    if(tarefasConcluidas) {
        console.log(tarefa.descricao);  // Imprime apenas as tarefas concluídas
    }
})
