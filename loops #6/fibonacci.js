/*
Exiba os 10 primeiros números da sequência de Fibonacci usando um loop.
(Dica: A sequência começa com 0 e 1, e cada número subsequente é a soma dos dois anteriores.)
*/

// Inicializa os dois primeiros números da sequência
let a = 0;
let b = 1;

// Exibe os primeiros números no console
console.log(a,b);

// Calcula o próximo número da sequência
let nextNum = a + b;

// Loop para gerar os próximos 8 números da sequência
for(let i = 1; i <= 8; i++) {
    a = b;  // Atualiza 'a' para o valor de 'b'
    b = nextNum;  // Atualiza 'b' para o próximo número da sequência
    nextNum = a + b;  // Calcula o próximo número somando os dois anteriores

    console.log(nextNum);  // Exibe o próximo número da sequência
}
