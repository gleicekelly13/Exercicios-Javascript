/*
Filtrar números pares Dado o array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
utilize o método filter para criar um novo array contendo apenas os números pares.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
let numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares);


/*  TRANSFORMANDO O CÓDIGO EM FUNÇÃO
function filtrarNumerosPares (array) {  //A função recebe um array como parâmetro.
    //O método é usado para verificar, para cada elemento do array, se ele é divisível por 2(se é par)
    return array.filter(numero => numero % 2 === 0);  //Retorna um novo array contendo apenas os números pares
};

//Permite que receba diferentes arrays como entrada e retorne os números pares
const numerosPares = filtrarNumerosPares(numeros);

console.log(numerosPares);
*/

