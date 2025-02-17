/*
Dado um array de nomes, use map para adicionar o prefixo "Sr(a). " a cada nome.
*/

const nomes = ["Marta", "Maria", "Ana", "Alice", "Mari"];
let nomes_prefixo = nomes.map(nome => `Sr(a) ${nome}`);

console.log(nomes_prefixo);
