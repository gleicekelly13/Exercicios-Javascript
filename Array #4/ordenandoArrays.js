/*
Crie um array com nomes de pessoas.
Ordene os nomes em ordem alfabética e imprima o array.
Verifique se um nome específico está presente no array usando o método includes.
*/

let nomes = ["Gleice", "Kelly", "Mari", "Erick", "Guilherme", "Gustavo"];
nomes.sort();  //Ordena o array em ordem alfabética

//nomes.sort().reverse()  //Ordena e depois inverte a ordem

console.log(nomes);

console.log(`Gleice está na lista? ${nomes.includes('Gleice')}` );

console.log(`May está na lista? ${nomes.includes('May')}`);
