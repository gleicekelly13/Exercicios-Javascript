/*
Converter temperatura
Crie uma função chamada converterParaCelsius que receba uma temperatura em Fahrenheit 
e retorne o valor equivalente em Celsius.
*/

function converterParaCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;  //Fórmula que faz a conversão de Fahrenheit para Celsius

    return celsius;
}

let fahrenheit = 5;

console.log(`A temperatura ${fahrenheit}° em fahrenheit convertida para celsius é igual a: ${converterParaCelsius(fahrenheit).toFixed(2)}° Celsius `)
