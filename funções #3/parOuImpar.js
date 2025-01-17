/*
Verificar se um número é par ou ímpar
Crie uma função chamada parOuImpar que receba um número como argumento 
e retorne "Par" se o número for par, ou "Ímpar" caso contrário.
*/

function imparOuPar(number) {
    if(number % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar"
    }
} 


/*function imparOuPar (number) {
    return number % 2 === 0 ? 'Par' : 'Ímpar';
} */

console.log(imparOuPar(15));
