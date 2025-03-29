/*
Complete a função para que ela encontre a média das três notas passadas a ela 
e retorne o valor da letra associado a essa nota.

Pontuação Numérica	Nota da letra
90 <= pontuação <= 100	'A'
80 <= pontuação < 90	'B'
70 <= pontuação < 80	'C'
60 <= pontuação < 70	'D'
0 <= pontuação < 60	'F'
*/

function getGrade (s1, s2, s3) {
    let media = (s1 + s2 + s3) / 3;
    return media >= 90 && media <= 100 ? 'A': media >= 80 && media < 90 ? 'B' : media >= 70 && media < 80 ? 'C' : media >= 60 && media < 70 ? 'D' : 'F' 
}

let calculaMedia = getGrade(95, 90, 93);
console.log(calculaMedia);
