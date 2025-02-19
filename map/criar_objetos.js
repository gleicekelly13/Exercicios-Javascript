/*
Dado um array de nomes de produtos, use map para criar um array de objetos, 
onde cada objeto tenha o nome do produto e um preço padrão de R$ 10.
*/

const produtos = ["Caneta", "Caderno", "Lápis"];

//Map transforma cada produto em um objeto
let array_objetos = produtos.map(produto => { //O map percorre cada item do array produtos, e o parâmetro `produto` representa o nome de cada produto.
    return {nome: produto, preco: 10}; // Retorna um objeto com: nome igual ao nome do produto atual, preco fixo como 10.
} );

console.log(array_objetos);


/* FORMA SIMPLIFICADA COM RETORNO IMPLÍCITO
let array_objetos = produtos.map(produto => ({nome: produto, preco: 10}));
console.log(array_objetos);
*/

/*
O segredo do map está em lembrar que ele pega cada item do array original, 
faz uma transformação, e devolve um novo array. 
Neste caso, bastava transformar os produtos em objetos.
*/
