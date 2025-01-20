/*
Use o for, while e do...while para exibir os números de 1 a 10 no console.
*/

//FOR

for(let number = 1; number <= 10 ; number++) {
    console.log(number);
}

//WHILE 
let numero = 1;  //Declaração da variável

while(numero <= 10) {  //Condição para a repetição
    console.log(numero);
    numero++;  //Incrementação
}

//DO

let num = 1;

do{  // Executa o código
    console.log(num);
    num++;
} while(num <= 10);  //Enquanto atende a condição de repetição


// Os três métodos podem ser formar uma função reutilizável, para evitar duplicação do código
