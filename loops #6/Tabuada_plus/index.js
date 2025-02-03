/*
Modifique a tabuada para aceitar um intervalo de números (ex: tabuada de 1 a 5).
Solicitar ao usuário dois números: um número inicial e um número final.
Mostrar a tabuada para todos os números nesse intervalo.
Use um loop para percorrer todos os números entre inicio e fim.
Dentro do loop, exiba a tabuada de cada número (de 1 a 10).
*/

import entradaDados from 'readline-sync';

let inicio = parseInt(entradaDados.question('Digite um numero inicial: '));
let fim = parseInt(entradaDados.question('Digite um numero final: '));

if(isNaN(inicio) || isNaN(fim)) {  //Verifica se o número é válido
    console.log("Por favor, digite números válidos.");

} else if(inicio > fim) {  //Verificação para evitar que inicio seja maior que fim
    console.log("O número inicial deve ser menor ou igual ao número final.")

} else {
    console.log(`\nTabuada de ${inicio} até ${fim}`);

    for(let multiplicador = inicio; multiplicador <= fim; multiplicador++) {  /*Vai do número inicial até o final 
                                                                    Representa os números cujas tabuadas serão exibidas*/
        console.log(`\nTabuada de: ${multiplicador}`)

        for(let contador = 0; contador <= 10; contador++) {  //Exibe a tabuada de 1 a 10 para o número atual do loop externo
            let resultado = multiplicador * contador;
            console.log(`${contador} x ${multiplicador} = ${resultado}`)
        }
    }

}
