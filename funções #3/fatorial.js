/*
Calcular o fatorial de um número
Crie uma função chamada fatorial que receba um número como argumento e retorne o fatorial dele. 
Exemplo: fatorial de 5 é 120 (5 × 4 × 3 × 2 × 1)
*/

function fatorial (num) { 
    if(num === 0 || num === 1) { // *
        return "1 = 1";  // Fatoriais de 0 e 1 sempre resultam em 1
    }

    let resultado = 1;  // Variável usada para armazenar o fatorial calculado.
    let expressao = "";  // ** Começa como uma string vazia. Vai armazenar a sequência de multiplicações
    

    for(let i = num; i >= 1; i--) { // Começa com o número num e diminui até 1 (decremento com i--)
        resultado *= i;

        if(i === num) {
            expressao += `${i}`;
        } else {
            expressao += ` x ${i}`;
        }

    }
 
    // Combina a expressão com o resultado do cálculo.
    return `${expressao} = ${resultado}`;  // Retorna a expressão completa e o valor do fatorial
}

let num = 10

console.log(`Fatorial de ${num}! = ${fatorial(num)}`); // *** Utiliza o valor retornado pela função fatorial

/*A verificação ocorre antes do loop, garantindo que, se o número for 0 ou 1, a função retorne imediatamente,
sem executar o loop desnecessariamente. 

** A variável `expressao` é declarada no escopo local da função fatorial. Como ela é reiniciada 
toda vez que a função é chamada, isso garante que expressao comece sempre vazia 
e seja construída corretamente para cada chamada.

*** Para que isso funcione corretamente, a função precisa montar 
e retornar a expressão completa (o que é feito no return). 

`resultado *= i`: Multiplica resultado pelo valor atual de i e armazena o novo valor em resultado. 
Isso acumula o cálculo do fatorial.
*/
