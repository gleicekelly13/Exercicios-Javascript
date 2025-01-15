/*
Inverter uma string
Crie uma função chamada inverterString que receba uma string como argumento 
e retorne a string invertida.
*/

function inverterStr (str) {
    let palavra_invertida = '';

    for(let i = str.length - 1; i >= 0; i--) {
        palavra_invertida += str[i];
    }

    return palavra_invertida
}

let palavra = "gato";

console.log(`A palavra '${palavra}' invertida fica '${inverterStr(palavra)}'!`);
