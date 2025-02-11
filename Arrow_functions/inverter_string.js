/*
Crie uma arrow function que receba uma string e retorne a mesma string invertida.
*/

const inverterStr = (str) => {
    let palavra_invertida = '';

    //Loop para inverter a string
    for(i = str.length - 1; i >= 0; i--) {
        palavra_invertida += str[i];  //Adiciona (+=) o caractere atual (str[i]) à variável palavra_invertida.
        //No final do loop, teremos a string completamente invertida.
    }

    return palavra_invertida;
}

console.log(inverterStr('gato'));


/* ALTERNATIVA COM MÉTODOS DE STRING
const inverterStr = (str) => str.split("").reverse().join("");
console.log(inverterStr('gato'));
*/


/*
for(i = str.length - 1; i >= 0; i--) :
- Começa do último caractere (str.length - 1).
- Percorre a string de trás para frente até o índice 0.
- i-- diminui i a cada iteração


str.split(""): Transforma a string em um array de caracteres.
Ex: gato ["g", "a", "t", "o"]

.reverse(): Inverte a ordem dos elementos do array.

.join(""): Junta os elementos do array de volta em uma string.
Ex: ["o", "t", "a", "g"].join("") // "otag"

*/
