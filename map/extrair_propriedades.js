/*
Dado um array de objetos representando pessoas, use map para criar 
um novo array contendo apenas os nomes.
*/

const pessoas = [
    { nome: "Carlos", idade: 25 },
    { nome: "Ana", idade: 22 },
    { nome: "João", idade: 30 },
];

let nomes_pessoas = pessoas.map(pessoa => pessoa.nome);
console.log(nomes_pessoas);
