/*
Crie uma arrow function que receba um array de números e um número multiplicador. 
A função deve retornar um novo array com os números multiplicados pelo valor fornecido
*/

const multiplicaElementos = (numbers, multiplicador) => {

    let multiplicaNumeros = numbers.map(number => number * multiplicador);

    return multiplicaNumeros;
}

console.log(multiplicaElementos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));


/*
numbers.map(...) → O método .map() percorre cada elemento do array e cria um novo array com os resultados 
da operação dentro da função de callback.
number => number * multiplicador → Para cada número (number) no array:
- Ele multiplica pelo valor de multiplicador.
- O resultado é armazenado no novo array multiplicaNumeros.
*/
