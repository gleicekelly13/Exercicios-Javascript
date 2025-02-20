/*
Filtrar palavras longas Dado o array ["carro", "moto", "bicicleta", "avião", "ônibus"], 
crie um novo array contendo apenas as palavras com mais de 5 caracteres.
*/

/*
const palavras = ["carro", "moto", "bicicleta", "avião", "ônibus"];
let palavrasLongas = palavras.filter(palavra => palavra.length > 5);

console.log(palavrasLongas);
*/

const filtrarPalavrasLongas = (palavras) => {
    return palavras.filter(palavra => palavra.length > 5);
}

const palavras = ["carro", "moto", "bicicleta", "avião", "ônibus"];
const palavrasLongas = filtrarPalavrasLongas(palavras);

console.log(palavrasLongas);
