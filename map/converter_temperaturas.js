/*
Dado um array de temperaturas em Celsius, use map para convertê-las para Fahrenheit. 
A fórmula é: F = (C * 9/5) + 32
*/

const celsius = [0, 20, 30, 40];

//Usa o formato `${valor}°F` para adicionar o sufixo "°F" ao valor convertido.
let temperaturas_fahrenheit = celsius.map(c => `${(c * 9/5 + 32).toFixed(1)} °F`);

console.log(temperaturas_fahrenheit);
