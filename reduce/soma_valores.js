/*
Crie uma função que receba um array de números e use o método reduce 
para calcular a soma de todos os valores.
*/

function calcularSoma (numeros) {
    let somaValores = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    return somaValores;
}

console.log(calcularSoma([1, 2, 3, 4, 5]));
