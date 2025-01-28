/*
Peça ao usuário uma palavra e verifique se ela é um palíndromo (lê-se da mesma forma de trás para frente). 
Exemplo: "radar" é palíndromo.

Passos:
1 - Entrada do usuário;
2 - Inversão da palavra;
3 - Comparação;
4 - Saída
*/

import entradaDados from 'readline-sync';

let palavra = entradaDados.question('Digite uma palavra: ');  // 1

let palavra_invertida = "";  //Variável que armazena a nova palavra invertida

for(let i = palavra.length - 1; i >= 0; i--) {  //2 - Cria uma versão invertida da palavra. Constrói uma nova palavra começando pela última letra da original e indo até a primeira
    palavra_invertida += palavra[i];

}

if(palavra_invertida === palavra) { //3 - Compare a palavra original com a versão invertida
    console.log(`A palavra ${palavra} invertida fica ${palavra_invertida}: É um palíndromo!`)  // 4
} else {
    console.log(`A palavra ${palavra} invertida fica ${palavra_invertida}: Não é um palíndromo!`)
}
