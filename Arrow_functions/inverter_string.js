/*
Crie uma arrow function que receba uma string e retorne a mesma string invertida.
*/


const inverterStr = (str) => {
    let palavra_invertida = '';

    for(i = str.length - 1; i >= 0; i--) {
        palavra_invertida += str[i];
    }

    return palavra_invertida;
}

console.log(inverterStr('gato'));


/* ALTERNATIVA COM MÉTODOS DE STRING
const inverterStr = (str) => str.split("").reverse().join("");
console.log(inverterStr('gato'));
*/
