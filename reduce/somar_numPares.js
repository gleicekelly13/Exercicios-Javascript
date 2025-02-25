/*
Dado um array de números, use o reduce para somar apenas os números pares
*/

const numeros = [1, 2, 3, 4, 5, 6];

let somaPares = numeros.filter(num => num % 2 === 0).reduce((acumulador, par) => {

    return acumulador + par;
}, 0);

console.log(somaPares);



/* FORMA ALTERNATIVA SEM UTILIZAR O FILTER
let somaPares = numeros.reduce((acumulador, num) => 
    num % 2 === 0 ? acumulador + num : acumulador, 0
)

console.log(somaPares);

// Evita criar um array intermediário e melhora a performance, economizando tempo e memória
*/
 
/*FUNÇÃO SEM O FILTER
function somar_numPares (numeros) {
    return numeros.reduce((acumulador, num) => 
        num % 2 === 0 ? acumulador + num : acumulador, 0)
};

let numPares_somados = somar_numPares(numeros);

console.log(numPares_somados);
*/
