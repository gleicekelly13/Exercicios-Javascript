/*
Dado um array de números, use o forEach para identificar quais números são pares e imprima-os no console
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numPares = [];

numeros.forEach(numero => {
    if(numero % 2 === 0) {
        numPares.push(numero);
    }
    
});

console.log(numPares)
