/*
Crie uma arrow function que receba um array de números e retorne a média desses números.
*/

const calculaMedia = (numbers) => {
    
    let somaNumeros = numbers.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)

    let media = somaNumeros / numbers.length;

    return media;
}

console.log(calculaMedia([1, 2, 3, 4, 10]));
