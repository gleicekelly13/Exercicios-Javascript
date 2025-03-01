/*
Dado um array de arrays, use o reduce para transformá-lo em um objeto.
*/

const pessoa = [
    ['nome', 'Gleice'],
    ['idade', 34],
    ['cidade', 'Paulista']
];

let array_objetos = pessoa.reduce((acumulador, dados) => {
    const chave = dados[0];  // A chave (primeiro elemento do array)
    const valor = dados[1];  // O valor (segundo elemento do array)

    acumulador[chave] = valor;  // Adicione a chave e valor ao objeto acumulador

    return acumulador;  // Retorne o acumulador atualizado para a próxima iteração
}, {});  // Inicialize com um objeto vazio

console.log(array_objetos)



/* FUNÇÃO
function array_objetos (acumulador, dados) {
    const chave = dados[0];
    const valor = dados[1];

    acumulador[chave] = valor;

    return acumulador;
}

let transforma_em_objeto = pessoa.reduce(array_objetos, {});
console.log(transforma_em_objeto);
*/


/*
* A ideia é adicionar cada par chave-valor no acumulador(que será o objeto final)
* Cada elemento do array principal é um array menor com dois valores: chave e valor
* O acumulador começa como um objeto vazio {} e vai sendo preenchido com as chaves e valores de cada par.
* O reduce precisa retornar o acumulador atualizado para a próxima iteração
* `{}`: Quando passa o valor inicial como {} no reduce, ele define que o acumulador 
será um objeto vazio no início do processo. O acumulador começa como um objeto {} e, ao longo das iterações, vai sendo preenchido com as chaves e valores que você define. O tipo inicial do acumulador determina como você pode trabalhar com ele. No caso de um objeto vazio {}, você pode adicionar propriedades a ele (usando acumulador[chave] = valor)
*/


/* UTILIZANDO O `Object.fromEntries`, ELIMINA A NECESSIDADE DE DO REDUCE
const objeto = Object.fromEntries(pessoa);
console.log(objeto);
*/
