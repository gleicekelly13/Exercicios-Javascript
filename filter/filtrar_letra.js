/*
Utilizar o método filter para criar um novo array contendo apenas as palavras que possuem a letra "a"
*/

const palavras = ["maçã", "banana", "abacaxi", "morango", "uva", "kiwi", "pêssego"];
let letra_a = palavras.filter(palavra => palavra.includes('a'));

console.log(letra_a);



/* FUNÇÃO
const filtrarLetra_a = (palavras) => {
    return palavras.filter(palavra => palavra.includes('a'));
}

const palavras = ["maçã", "banana", "abacaxi", "morango", "uva", "kiwi", "pêssego"];
const palavra_letra_a = filtrarLetra_a(palavras);

console.log(palavra_letra_a);
*/
