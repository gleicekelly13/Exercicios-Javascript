/*
Crie uma arrow function que receba uma string e 
retorne a quantidade de vogais (a, e, i, o, u) na string.
*/

const contaVogais = (str) => {
    const vogais = ['A', 'E', 'I', 'O', 'U'];

    //Garante que todos os caracteres sejam convertidos em maiúsculas e transforma a string em um array
    const caracteres = str.toUpperCase().split("");

    // Filtra apenas os caracteres que são vogais
    const apenasVogais = caracteres.filter(caractere => vogais.includes(caractere));

    return apenasVogais.length; // Obtém o número de vogais no array filtrado
}

console.log(contaVogais('dinheiro')); 

/*
O método `filter` só funciona em arrays

vogais.includes(caractere): Com filter, verifica se cada caractere está presente no array vogais
Resultado: Apenas as vogais são mantidas no array
*/


/* FORMA SIMPLIFICADA
const contaVogais = str => str.toUpperCase().split("").filter(char => 'AEIOU'.includes(char)).length;
console.log(contaVogais('dinheiro'));
*/
