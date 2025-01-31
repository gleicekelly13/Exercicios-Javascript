/*
Use loops aninhados para desenhar o seguinte padrão no console:
 *
 **
 ***
 ****
 *****
O número de linhas pode ser definido pelo usuário.
*/

import entradaDados from 'readline-sync';

// Solicita ao usuário que digite o número de linhas desejado e converte para um número inteiro
let linhas = parseInt(entradaDados.question('Digite o numero de linhas que vc deseja: '))

// Loop externo: controla a quantidade de linhas do padrão
for(let i = 1; i <= linhas; i++) {  //

    let linha = '';  // Inicializa uma string vazia para armazenar os '*' da linha atual

    for(let j = 1 ; j <= i; j++) {  // Loop interno: adiciona '*' à string de acordo com o valor de `i`
        linha += '*'  // Concatena um '*' à variável `linha`
    }
    console.log(linha);  // Exibe a linha completa no console antes de passar para a próxima
}

/*
* Cada linha tem uma quantidade crescente de `*`, pois o número 
de repetições no loop interno cresce de acordo com `i`.
* `i` representa o número da linha atual. Ele começa em 1 e vai até linhas, 
que é o valor inserido pelo usuário.
* `j` é um contador que controla quantos `*` serão adicionados, de acordo com o número da linha(i)

* Resumo: 
- i (loop externo) → Controla quantas linhas serão exibidas, conforme a escolha do usuário.
- j (loop interno) → Controla quantos * serão adicionados em cada linha, de acordo com o número da linha (i).
- A cada nova linha (i aumenta), o número de * cresce proporcionalmente
*/

