/*
Dado um array de números, calcule a soma de todos os elementos usando o forEach.
*/

const numeros = [10, 20, 30, 40, 50];

let soma = 0;  //Variável que armazena a soma

numeros.forEach(numero => {  
    soma += numero;  // Adiciona cada número à variável de soma.
});

console.log(soma);
