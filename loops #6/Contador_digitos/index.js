/*
Peça ao usuário um número inteiro e conte quantos dígitos ele tem usando um loop.
*/

import entradaDados from 'readline-sync';

// Solicita um número inteiro ao usuário e converte para número
let num = parseInt(entradaDados.question('Digite um numero inteiro: '));

// Inicializa a variável para contar os dígitos
let contador = 0;

/*while(num >= 1) {
    num /= 10;
    contador++;
    
}
console.log(contador);*/

//FORMA ALTERNATIVA
/*while(num >= 1) {
    num = Math.floor(num / 10);  // Divide por 10 e remove a parte decimal
    contador++;  // Conta um dígito
}
console.log(contador); */

//FOR (Alternativa mais compacta)
for(let i = num; i >= 1; i = Math.floor(i / 10)) {
    contador++;  // Conta um dígito a cada divisão
} 
console.log(`O número tem ${contador} dígitos(s)`)


/* 
Enquanto o número for maior ou igual a 1, continuamos dividindo ele por 10.
Cada vez que dividimos, significa que removemos um dígito.
Incrementamos o contador a cada iteração.
*/
