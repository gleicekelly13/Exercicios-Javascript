/*
Crie uma arrow function que receba um array de números e retorne apenas os números pares.
*/

const numPar = (arr) => {
    let numPares = arr.filter(numero => numero % 2 === 0);

    return numPares;
}

console.log(numPar([1, 2, 4, 7, 11, 15, 20, 26, 34, 45, 50, 55, 61, 70]));


/*  FORMA SIMPLIFICADA
const numPar = arr => arr.filter(numero => numero % 2 === 0);
*/
