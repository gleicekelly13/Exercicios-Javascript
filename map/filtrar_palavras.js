/*
Dado um array de palavras, use map para criar um novo array 
que indique se cada palavra tem mais de 5 letras (true ou false)
*/

const palavras = ["javascript", "map", "exercícios", "praticar"];
let palavras_longas = palavras.map(palavra => palavra.length > 5);

console.log(palavras_longas)
