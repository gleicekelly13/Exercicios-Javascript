/*
Crie uma arrow function que receba uma string e 
retorne a quantidade de vogais (a, e, i, o, u) na string.
*/

const contaVogais = (str) => {
    let converteStr = str.toUpperCase();

    const vogais = ['A', 'E', 'I', 'O', 'U'];

    let contador = 0;  //Variável para armazenar a contagem de vogais

    /*for(let i = 0; i < converteStr.length; i++) {  //Caso quisesse utilizar o método for
        if(vogais.includes(converteStr[i])) {
            contador++;
        }
    }*/

    // Converte a string em um array de caracteres e itera sobre cada caractere
    converteStr.split("").forEach(vogal => {
        if(vogais.includes(vogal)) {
            contador++;  // Incrementa se o caractere for uma vogal
        }
    })

    return contador;
}

console.log(contaVogais("paralelepipedo"));

/*
* O método split("") quebra a string em um array onde cada caractere é um elemento.
* O método forEach só pode ser usado em arrays.
*/
