/*
Crie uma arrow function que receba três parâmetros: dois números e uma operação (+, -, *, /). 
A função deve retornar o resultado da operação.
*/

const calculadora = (a, b, op) => {

    switch(op) {
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
        default:
            return "Operação inválida!"
    }

    return operacao;
}

let operacao;
console.log(calculadora(2, 10, '+'))
