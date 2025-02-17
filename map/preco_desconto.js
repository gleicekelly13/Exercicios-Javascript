/*
Dado um array de preços, use map para criar um novo array 
aplicando um desconto de 10% a cada preço
*/

const precos = [100, 200, 300, 400];

//Preço com desconto = Preço original × (1 - Percentual de desconto)
let preco_com_desconto = precos.map(preco => preco * (1 - 0.1));  //desconto 10% = 0.1

console.log(preco_com_desconto);


/*  FORMA ALTERNATIVA
let preco_com_desconto = precos.map(preco => +(preco * 0.9).toFixed(2));
*/
