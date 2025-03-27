/*
Escreva uma função chamada setAlarm/ set_alarm/ set-alarm/ setalarm(dependendo da linguagem) que receba dois parâmetros. O primeiro parâmetro, employed, é verdadeiro sempre que você estiver empregado e o segundo parâmetro, vacation é verdadeiro sempre que você estiver de férias.

A função deve retornar true se você estiver empregado e não de férias (porque essas são as circunstâncias sob as quais você precisa definir um alarme). Deve retornar false caso contrário. Exemplos:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false

*/

/*function setAlarm(employed, vacation){
  if(employed && vacation) {
    return false
  } else if (employed && !vacation) {
    return true
  } else if(!employed && vacation) {
    return false
  } else {
    return false
  }
} */


function setAlarm(employed, vacation){
    return employed && !vacation;  // Retorna `true` sempre que employed for `true` e vacation for `false`
}

let empregado = true;
let ferias = false;
console.log(setAlarm(empregado, ferias));
