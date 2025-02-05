/*
Exiba os 10 primeiros números da sequência de Fibonacci usando um loop.
(Dica: A sequência começa com 0 e 1, e cada número subsequente é a soma dos dois anteriores.)
*/

// Inicializa os dois primeiros números da sequência
let a = 0;
let b = 1;

// Exibe o primeiro número da sequência
console.log(a);

// Loop para gerar os próximos 9 números da sequência
for(let i = 1; i < 10; i++) {
    console.log(b)  // Exibe o valor atual de 'b' antes da atualização

    let nextNum = a + b;  // Calcula o próximo número somando os dois anteriores
    
    a = b;  // Atualiza 'a' para o valor de 'b'
    b = nextNum;  // Atualiza 'b' para o próximo número da sequência
    
}
