/*
Dado um array com strings, use o reduce para contar quantas vezes cada string aparece
*/

/* ALTERNATIVA
const frutas = ['maçã', 'banana', 'maçã', 'banana', 'laranja', 'banana'];
let conta_frutas = frutas.reduce((acumulador, fruta) => {
    acumulador[fruta] = (acumulador[fruta] || 0) + 1;

    return acumulador
}, {});

console.log(conta_frutas);
*/

// Função que conta a frequência de cada fruta em um array
function contaFrutas(frutas) {
    return frutas.reduce((acumulador, fruta) => {
        // Se a fruta já existir no acumulador, incrementa o contador
        // Caso contrário, inicializa com 0 e soma 1
        acumulador[fruta] = (acumulador[fruta] || 0) + 1;

        // Retorna o objeto acumulador atualizado
        return acumulador;
    }, {})  // O acumulador começa como um objeto vazio
};

const frutas = ['maçã', 'banana', 'maçã', 'banana', 'laranja', 'banana'];
let frutas_contadas = contaFrutas(frutas);

console.log(frutas_contadas);
