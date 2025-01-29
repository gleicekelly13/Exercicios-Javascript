/*
Calcule o fatorial de um número fornecido pelo usuário. Exemplo: o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120.
*/
 
import entradaDados from 'readline-sync';  // Permite a entrada de dados diretamente no terminal, de forma síncrona.

let num = parseInt(entradaDados.question('Digite um valor para saber seu fatorial: '));  //Recebe o o número q será fatorado
let expressao = "";  // Variável para acumular a expressão matemática

let resultado = 1  //Acumula o cálculo do fatorial

for(let i = num; i >= 1; i--) {  //O loop começa com i = num e vai até i = 1.
    resultado *= i;  //O operador *= multiplica o valor atual de resultado pelo valor de i e atualiza o valor de resultado.

    if(num === 0 || num === 1) {  //Verifica se o número digitado é 0 ou 1 e define o resultado diretamente como 1.
        resultado = 1  //O fatorial de 0 e 1 é sempre 1 por definição matemática.
    }

    if(i === num) {
        expressao += `${i}`;  // Adiciona o primeiro número sem o "x"
    } else {
        expressao += ` x ${i}`  // Adiciona o primeiro número sem o "x"
    }
}

console.log(`${num}! = ${expressao} = ${resultado}`)


/*
for(let i = num; i >= 1; i--) {
O loop começa com i igual ao número informado pelo usuário (num) e vai decrementando até chegar a 1.
Cada valor de i representa os números que serão multiplicados para calcular o fatorial.

let resultado = 1;
A variável resultado é inicializada como 1, já que o fatorial é um produto (multiplicação). 
Multiplicar qualquer número por 1 não altera seu valor.


*/
