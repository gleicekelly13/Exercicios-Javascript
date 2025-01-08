/*
Somando valores
Crie um array com os números de 1 a 10.
Use o método reduce para calcular a soma de todos os números do array.
Imprima o resultado.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somaNumeros = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
/*Para cada elemento do array, somamos o valor do acumulador com o valorAtual. 
Isso acumula a soma dos elementos.
O acumulador começa com 0, que é o valor inicial fornecido. A soma será iniciada a partir desse valor
*/

console.log(somaNumeros);

/*
O método reduce percorre o array, elemento por elemento.
Iterações no array:
Primeira iteração:

acumulador = 0 (valor inicial)
valorAtual = 1 (primeiro elemento do array)
Nova soma: 0 + 1 = 1
Segunda iteração:

acumulador = 1 (resultado acumulado da iteração anterior)
valorAtual = 2 (segundo elemento do array)
Nova soma: 1 + 2 = 3
Terceira iteração:

acumulador = 3
valorAtual = 3
Nova soma: 3 + 3 = 6
Repete até o último elemento:
Na última iteração:

acumulador = 45
valorAtual = 10
Nova soma: 45 + 10 = 55

*/
