/*
Filtrando elementos
Crie um array com números aleatórios entre 1 e 100.
Filtre apenas os números pares e imprima o novo array.
Filtre apenas os números maiores que 50 e imprima o resultado.
*/

let numerosAleatorios = [];  // Cria um array vazio para armazenar os números aleatórios
let tamanhoArray = 100;  // Define o tamanho do array

// Preenche o array com números aleatórios entre 1 e 100
for(let i = 1; i <= tamanhoArray; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 100) + 1);

}

console.log(numerosAleatorios);

let pares = numerosAleatorios.filter(numero => numero % 2 === 0);  // Filtra apenas os números pares e imprima o novo array

console.log(pares);

let numerosMaiores50 = numerosAleatorios.filter(numero => numero > 50); // Filtra os números maiores que 50 no array

console.log(numerosMaiores50);
