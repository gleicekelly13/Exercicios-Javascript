/*
Crie uma função que receba um array de números 
e use o reduce para calcular o produto de todos os valores.
*/


function calcularProduto(numeros) {
    let produto_numeros = numeros.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);

    return produto_numeros;
};

console.log(calcularProduto([2, 3, 4]));


/* ALTERNATIVA
function calcularProduto(numeros) {
    return numeros.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
};

let numeros = [2, 3, 4];
let produto_numeros = calcularProduto(numeros);

console.log(produto_numeros);
*/

/*
No caso de reduce, quando não passamos um valor inicial, o primeiro elemento do array 
será o valor inicial automaticamente. Isso funciona bem quando multiplicamos, 
mas pode causar erro caso o array esteja vazio.
A solução é adicionar 1 como valor inicial para evitar problemas.
*/
