/*
Crie um novo array contendo apenas os produtos com preço menor que 500
*/


const produtos = [
    {nome: "Celular", preco: 1500},
    {nome: "Notebook", preco: 3000},
    {nome: "Fone de ouvido", preco: 150},
    {nome: "Carregador", preco: 100},
]


/*let produtos_baratos = produtos.filter(produto => produto.preco < 500);

console.log(produtos_baratos);
*/

//FUNÇÃO
function filtrarPrecoProduto (produtos) {
    return produtos.filter(produto => produto.preco < 500);
}

const produtos_baratos = filtrarPrecoProduto(produtos);
console.log(produtos_baratos);
