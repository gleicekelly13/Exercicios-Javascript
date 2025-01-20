/*
Solicite ao usuário um número (pode usar prompt) e exiba a tabuada desse número de 1 a 10 usando um loop.
*/

// Assíncrona

const readline = require('readline');

//Construção da interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número para ver a tabuada: ", (multiplicador) => {
    multiplicador  = parseInt(multiplicador);

    for(let contador = 0; contador <= 10; contador++) {
        let resultado = multiplicador * contador;  // O valor da multiplicação entre os números é guardado na variável resultado
        console.log(`${contador} x ${multiplicador} = ${resultado}`)
    }

    rl.close();  // Fecha a interface readline
})





