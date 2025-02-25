/*
Use o reduce para encontrar o maior número em um array
*/


const numeros = [5, 12, 8, 20, 3];

/*let maiorNumero = numeros.reduce((acumulador, numAtual) => numAtual > acumulador? numAtual : acumulador);

console.log(maiorNumero);
*/

/* ALTERNATIVA
const encontrarMaiorNumero = (numeros) => {
    return numeros.reduce((acumulador, numAtual) => numAtual > acumulador ? numAtual : acumulador);
}

let numeros = [5, 12, 8, 20, 3];
let maiorNumero = encontrarMaiorNumero(numeros);

console.log(maiorNumero);
*/ 

// --------------------------------------------------------------------------- 

/*
Se o número atual é maior que o acumulador, atualiza o acumulador com numAtual.
Caso contrário, mantém o acumulador como está.
*/

//UTILIZANDO O MÉTODO `Math.max` compara o maior número atual com o próximo número do array.

let maiorNumero =numeros.reduce((acumulador, numAtual) => Math.max(acumulador, numAtual), 0);

console.log(maiorNumero);

/*Inicializar o acumulador para todos os elementos do array serem incluidos na iteração e evitar erros, 
caso o array esteja vazio.
*/
