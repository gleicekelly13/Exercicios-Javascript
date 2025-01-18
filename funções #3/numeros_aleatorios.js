/*
Gerar números aleatórios
Crie uma função chamada numeroAleatorio que retorne um número aleatório 
entre 0 e 100 toda vez que for chamada.
*/

function numeroAleatorio () {
    num = Math.floor(Math.random() * 101);

    return num
}
 
let number;
console.log(numeroAleatorio());
