/*
Dado um array de objetos que representam produtos, 
use o forEach para imprimir o nome e o preço de cada produto.
*/

const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Sapato", preco: 150 },
];

produtos.forEach((produto, index) => {
    console.log(`${index + 1} - ${produto.nome}: ${produto.preco}`);
});
