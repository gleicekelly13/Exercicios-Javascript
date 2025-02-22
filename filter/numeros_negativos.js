/*
Criar um novo array contendo apenas os números negativos.
*/

const numeros = [5, -3, 8, -1, 4, -9, 2];
let numNegativos = numeros.filter(num => num < 0);

console.log(numNegativos);


/* TRANSFORMANDO O CÓDIGO EM FUNÇÃO
const filtraNumNegativos = (array) => {
    return array.filter(num => num < 0)
}; 

const numNegativos = filtraNumNegativos(numeros);

console.log(numNegativos);
*/
