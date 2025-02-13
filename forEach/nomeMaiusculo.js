/*
Crie um array de nomes e use o forEach para transformar todos os nomes em maiúsculas, 
armazenando-os em um novo array.
*/

const nomes = ["Gleice", "Ana", "João", "Maria", "Pedro", "Lucas"];


let nomeMaiusculo = [];  //Array vazio no qual serão adicionados os nomes maiúsculos

nomes.forEach(nome => {
    let aumentaLetra = nome.toUpperCase();  //tarnsforma cada noma em maiúsculo

    nomeMaiusculo.push(aumentaLetra)  //Adiciona cada nome maiúsculo no array `nomeMaiusculo`
});

console.log(nomeMaiusculo)

