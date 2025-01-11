/*
Crie um array com uma lista de frutas (exemplo: ["maçã", "banana", "laranja", "maçã", "uva", "banana"]).
Conte quantas vezes cada fruta aparece no array.
Imprima os resultados em formato de objeto, por exemplo: { maçã: 2, banana: 2, laranja: 1, uva: 1 }.
*/

let frutas = ["maçã", "banana", "laranja", "maçã", "uva", "banana"];
 
let contagem = frutas.reduce((acumulador, fruta) => {
    acumulador[fruta] = (acumulador[fruta] || 0) + 1;
    return acumulador;  //O acumulador é retornado, e ele contém o objeto com as contagens parciais até o momento.
}, {});  /*valor inicial do acumulador. Estamos iniciando com um objeto vazio {} que será preenchido conforme 
            o reduce() itera sobre o array.*/

console.log(contagem);

/*
O método reduce() é utilizado para acumular um valor a partir dos elementos de um array. 
Ele recebe uma função de callback que é chamada para cada item do array. 
A função de callback recebe dois parâmetros:

acumulador: Ele armazena o valor acumulado ao longo das iterações.
fruta: O item atual (no caso, o nome de uma fruta).

acumulador[fruta] = (acumulador[fruta] || 0) + 1;
acumulador[fruta]: Acessa a chave correspondente ao nome da fruta dentro do objeto acumulador. Caso a fruta ainda não tenha sido contada, o valor será undefined.
(acumulador[fruta] || 0): Verifica se acumulador[fruta] existe (ou seja, se já contamos essa fruta antes). Se não, atribui o valor 0 para começar a contagem.
+ 1: Soma 1 à contagem da fruta.
Isso basicamente verifica se a fruta já foi contada. Se sim, incrementa a contagem. Se não, começa a contagem com 1.

*/
