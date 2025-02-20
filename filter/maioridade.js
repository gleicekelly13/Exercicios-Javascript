/*
Utilize filter para criar um array apenas com as pessoas maiores de idade
*/

/*const pessoas = [
    {nome: "Gleice", idade: 34},
    {nome: "Erick", idade: 20},
    {nome: "MAri", idade: 16},
    {nome: "Guilherme", idade: 12},
    {nome: "Gustavo", idade: 6}
]

let maior_idade = pessoas.filter(pessoa => pessoa.idade >= 18)
console.log(maior_idade);
*/

function filtrarMaiorIdade (objeto) {
    return objeto.filter(pessoa => pessoa.idade >= 18);
}

const pessoas = [
    {nome: "Gleice", idade: 34},
    {nome: "Erick", idade: 20},
    {nome: "MAri", idade: 16},
    {nome: "Guilherme", idade: 12},
    {nome: "Gustavo", idade: 6}
];

const maior_idade = filtrarMaiorIdade(pessoas);
console.log(maior_idade);
