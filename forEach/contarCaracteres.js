/*
Dado um array de palavras, use o forEach para imprimir o número de caracteres de cada palavra.
*/

const palavras = ["JavaScript", "ForEach", "Prática", "Código"];

palavras.forEach(palavra => {
    let total_letras = palavra.length;

    console.log(total_letras);

});


