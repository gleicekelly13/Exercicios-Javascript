/*
Crie uma arrow function que receba um array de números 
e retorne um novo array com o quadrado de cada número.
*/

const quadradoNumeros = (numeros) => {
    let numerosQuadrados = numeros.map(numero => numero ** 2);

    return numerosQuadrados;
}

console.log(quadradoNumeros([1, 2, 3, 4, 10, 15, 20, 30, 40, 50]));
