/*
Crie uma função que receba um inteiro como argumento e retorne "Even"para números pares ou "Odd"ímpares.
*/

function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

let checkNum = evenOrOdd(5);
console.log(checkNum);
