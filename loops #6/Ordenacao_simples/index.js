/*
Solicite ao usuário para fornecer 5 números. Armazene-os em um array e use um loop para 
ordenar os números em ordem crescente (sem usar métodos prontos como .sort()).
*/

import entradaDados from 'readline-sync';

let numeros = [];  //Inicializa o array vazio 

for(let k = 0; k < 5; k++) {
    numeros.push(parseInt(entradaDados.question('Digite um numero: ')));  /* Coleta 5 números do usuário 
                                                                            e armazena-os no array */
    
    //BUBBLE SORT - "algoritmo de ordenação por bolha"
    for(let i = 0; i <= numeros.length - 1; i++) { //Controla quantas vezes percorremos o array.

        for(let j = 0; j < numeros.length - 1 - i; j++) {  //Percorre os elementos do array, comparando cada número com o próximo.
            if(numeros[j] > numeros[j +1]) { //Se o elemento atual (numeros[j]) for maior que o próximo (numeros[j +1]), faz a troca.
                let temp = numeros[j];  // Variável temporária para salvar o valor do número atual `numeros[j]`
                numeros[j] = numeros[j + 1];  //Substitui o número atual (numeros[j]) pelo número seguinte (numeros[j + 1]).
                numeros[j + 1] = temp; //Coloca o número que estava em temp (o número maior) na posição seguinte (numeros[j + 1]).
            }
        }
    }
}
console.log(numeros);


/*
BUBBLE SORT:
Ele compara dois elementos consecutivos do array.
Se o elemento da esquerda for maior que o da direita, eles trocam de lugar.
Ele repete esse processo para todos os elementos, "empurrando" os maiores números para o final a cada "passada".
Isso é feito até que o array esteja completamente ordenado.

for(let i = 0; i <= numeros.length - 1; i++)
O algoritmo de ordenação precisa verificar a lista várias vezes para garantir
que todos os números estejam na ordem correta;
`numeros.length` é o tamanho do array, subtraímos 1 porque ao comparar dois números de cada vez,
o último número não precisa ser comparado com nada além do penúltimo.

for(let j = 0; j < numeros.length - 1 - i; j++) {
Ele percorre o array, número por número, comparando pares de números adjacentes (números que estão lado a lado);
Verifica quais números precisam ser trocados de posição para ficarem na ordem correta.
`numeros.length - 1 - i` Depois de cada "passada" do primeiro loop (i), o maior número já estará no final da lista. 
Por isso, podemos ignorar os últimos números que já estão ordenados.
Estamos diminuindo o alcance do segundo loop, o que significa que ele vai ignorar os números que já foram ordenados em iterações anteriores;
No Bubble Sort, após cada "passada" do primeiro loop (controlado por i), o maior número da lista "sobe" para sua posição correta no final da lista. Como esses números já estão ordenados, não faz sentido compará-los novamente;

Como funciona:
Na primeira rodada (i = 0):
O segundo loop percorre toda a lista, do início até o penúltimo número (j < numeros.length - 1). O maior número será "empurrado" para o último lugar.
Na segunda rodada (i = 1):
O segundo loop percorre a lista, mas agora ele só vai até numeros.length - 2 (ignora o último número, porque já está ordenado).
Na terceira rodada (i = 2):
O segundo loop vai até numeros.length - 3, ignorando os dois últimos números.

Subtração como forma de ignorar:
A cada iteração, - i reduz o número de elementos que precisam ser verificados, 
pois sabemos que os últimos números já estão no lugar certo.
A subtração - i "encurta" o alcance do loop e faz com que ele ignore os números ordenados, 
tornando o algoritmo mais eficiente.

let temp = numeros[j]; O valor do número atual precisa ser guardado antes de sobrescrito, para não perder este número.

numeros[j] = numeros[j + 1];  Move o número menor para a posição correta.

numeros[j + 1] = temp; Coloca o número que estava em temp (o número maior) na posição seguinte (numeros[j + 1]).
Agora os dois números estão trocados e na ordem certa.

Resumo geral do código:
1 - O programa começa com uma lista vazia.
2 - Um loop pergunta ao usuário 5 números e os armazena na lista.
3 - O Bubble Sort é executado:
  O maior número "sobe" para o final da lista a cada rodada.
  Repete isso até que todos os números estejam na ordem crescente.
4 - O programa mostra a lista ordenada no console.
*/
