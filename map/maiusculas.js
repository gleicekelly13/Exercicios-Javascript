/*
Dado um array de strings, use map para criar um novo array 
onde todas as strings estão em letras maiúsculas.
*/

const palavras = ["cachorro", "gato", "passaro", "coelho", "pato"];
let aumentaPalavras = palavras.map(palavra => palavra.toUpperCase());

console.log(aumentaPalavras)
