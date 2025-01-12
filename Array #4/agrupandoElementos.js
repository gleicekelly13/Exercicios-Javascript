/*
Crie um array com números aleatórios de 1 a 20.
Separe os números em dois grupos: pares e ímpares.
Crie um objeto que armazene esses dois grupos.
*/

let numerosAleatorios = [];
let tamanhoArray = 20;

for(let i = 1; i <= tamanhoArray; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 20) + 1);
}

console.log(numerosAleatorios)

let numerosPares = numerosAleatorios.filter(numero => numero % 2 === 0);
console.log(numerosPares);

let numerosImpares = numerosAleatorios.filter(numero => numero % 2 !== 0);
console.log(numerosImpares);

/*let objeto = {
    grupoImpares: numerosImpares,
    grupoPares:  numerosPares
};

console.log(objeto.grupoPares[0]);
console.log(objeto.grupoPares.length)
*/

// Cria um objeto com dois grupos: pares e ímpares
let grupos = [
    {chave: "impares", valor: numerosImpares}, 
    {chave: "pares", valor: numerosPares}
]

// Converte o array de grupos em um objeto usando reduce
let objeto = grupos.reduce((acumulador, item) => {  //
    acumulador[item.chave] = item.valor;
    return acumulador
}, {});

console.log(objeto);  // Exibe o objeto com os dois grupos
console.log(objeto.pares.length)  // Exibe a quantidade de números pares


/*
acumulador: é o valor que vai sendo acumulado a cada iteração. Inicialmente, ele é um objeto vazio ({}), passado como segundo argumento do reduce.

item: é o valor do elemento atual do array (grupos), ou seja, 
cada objeto {chave: "impares", valor: numerosImpares} ou {chave: "pares", valor: numerosPares}.

Dentro da função de callback:
acumulador[item.chave] = item.valor: cria uma nova chave no objeto acumulador, onde a chave é o valor de item.chave (ou seja, "impares" ou "pares"), e o valor é o conteúdo de item.valor (o array de números ímpares ou pares).
O acumulador é retornado ao final de cada iteração, com a chave e valor adicionados, até que o array grupos seja totalmente percorrido.

Resumo:
O código começa com um array de objetos que relacionam "chaves" (como "impares" e "pares") com seus respectivos arrays de números.
O método reduce é usado para transformar esse array em um objeto, onde as chaves são as strings e os valores são os arrays de números.
Por fim, o código imprime o objeto e a quantidade de números no array de números pares.
*/
