/*
Peça ao usuário para digitar uma palavra e use um loop para exibir a palavra ao contrário.
Exemplo: "javascript" → "tpircsavaj"
*/

import entradaDados from 'readline-sync';

//VERSÃO SEM LOOP
/*let palavra = entradaDados.question('Digite uma palavra: ');

let array_char = palavra.split("");  // A string pode ser convertida em arrays para manipulação. Método split() converte strin em array

let palavra_invertida = array_char.reverse();  //O método reverse() só funciona em arrays

console.log(`${palavra_invertida.join("")}`);  // join() Junta os caracteres de volta em uma string
*/

//VERSÃO COM LOOP
let palavra = entradaDados.question('Digite uma palavra: ');

let palavra_invertida = "";

for(let i = palavra.length - 1; i >= 0; i--) { //Começa do último caractere da palavra e vai até o primeiro caractere, um por vez.
    palavra_invertida += palavra[i];  //Adiciona os caracteres à nova palavra
}

console.log(palavra_invertida);

/*
palavra.length - 1: É o último índice da palavra
palavra[i]: Usa o índice do loop para acessar os caracteres da string 
*/
