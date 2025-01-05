/*
Pergunte o valor de uma compra e, dependendo do valor, aplique um desconto:
Se for maior que 500, desconto de 15%.
Se for maior que 200, desconto de 10%.
Caso contrário, não há desconto. Use if/else.

*/

let valorCompra = 200;
let desconto;
let novoPreco;

if(valorCompra > 500) {
    desconto = 0.15;  // 15% de desconto
} else if (valorCompra >= 200 && valorCompra <= 500) {
    desconto = 0.10;  // 10% de desconto
} else { 
    desconto = 0;  // Sem desconto
}

// Corrige o cálculo para evitar divisão por zero
if(desconto > 0) {
    novoPreco = valorCompra - (valorCompra * desconto );  // Aplica o desconto
} else {
    novoPreco = valorCompra;  //Sem desconto , o preço não muda
}


console.log(`Qual o valor da compra? ${valorCompra.toFixed(2)}\n Desconto aplicado de ${(desconto * 100).toFixed(0)}%\n Total a pagar: ${novoPreco.toFixed(2)}`);
