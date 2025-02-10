/*
Crie uma arrow function que receba um array de números e um número multiplicador. 
A função deve retornar um novo array com os números multiplicados pelo valor fornecido
*/

const multiplicaElementos = (numbers, multiplicador) => {

    let multiplicaNumeros = numbers.map(number => number * multiplicador);

    return multiplicaNumeros;
}

console.log(multiplicaElementos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));


