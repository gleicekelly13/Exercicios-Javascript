/*
Encontrar o maior número
Crie uma função chamada maiorNumero que receba dois números como argumentos e retorne o maior deles.
*/

function maiorNUmero (a, b) {
    let resultado;

    if(a > b){
        resultado = `${a} é maior que ${b}`;
    } else {
        resultado = `${b} é maior que ${a}`
    }

    return resultado;
}

let a = 20;
let b = 10;
let resultado_final = maiorNUmero(a, b)

console.log(resultado_final);
