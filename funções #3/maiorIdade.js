/*
Verificar se é maior de idade
Crie uma função chamada ehMaiorDeIdade que receba a idade de uma pessoa como argumento 
e retorne true se ela for maior de idade (18 anos ou mais), e false caso contrário.
*/

function ehMaiorDeIdade (idade) {
    if (idade >= 18) {
        return true
    } else {
        return false;
    }
}

/*
function ehMaiorDeIdade (idade) {
    return idade >= 18;
}
*/

let idade = 34;
let validaIdade = ehMaiorDeIdade(idade);

console.log(`Idade equivalente a ${idade} é maior de idade?: ${validaIdade}`);
