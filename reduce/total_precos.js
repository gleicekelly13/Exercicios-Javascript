/*
Dado um array de objetos representando produtos, use o reduce para calcular o preço total
*/


const produtos = [
    { produto: 'Camiseta', preco: 25 },
    { produto: 'Calça', preco: 60 },
    { produto: 'Boné', preco: 15 }
];

let totalPrecos = produtos.reduce((total, item) => total + item.preco, 0);  
console.log(totalPrecos);


/* FUNÇÃO
const totalPrecos = (total, item) => {
    return total + item.preco;
}

let valorTotal = produtos.reduce(totalPrecos, 0);
console.log(valorTotal);
*/

/*
* O parâmetro `item` representa cada objeto do array
* `total + item.preco, 0`: Calcula o preço total somando os preços de cada produto(item) ao total acumulado, 
o acumulador(total) deve começar em 0 para somar os preços de maneira correta.
*/
