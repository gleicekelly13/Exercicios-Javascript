/*
Peça ao usuário para escolher uma operação matemática (+, -, *, /) e dois números. 
Implemente a operação escolhida usando switch/case.
*/

let operador = "+";
let a = 6;
let b = 2;
let operacao;
let resultado;

switch(operador) {
    case "+":
        operacao = a + b;
        break;
    case "-":
        operacao = a - b;
        break;
    case "*":
        operacao = a * b;
        break;
    case "/":
        operacao = a / b;
        break;
}

resultado = operacao;

console.log("O resultado da operação de " + a + operador + b + " é " + "= " + resultado);
