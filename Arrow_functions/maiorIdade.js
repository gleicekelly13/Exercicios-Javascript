/*
Crie uma arrow function que receba a idade de uma pessoa 
e retorne uma mensagem indicando se ela é maior de idade ou não.
*/

const checkIdade = (idade) => idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(checkIdade(18));
