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

function contaFrutas(frutas) {
    return frutas.reduce((acumulador, fruta) => {
        acumulador[fruta] = (acumulador[fruta] || 0) + 1;

        return acumulador;
    }, {})
};

const frutas = ['maçã', 'banana', 'maçã', 'banana', 'laranja', 'banana'];
let frutas_contadas = contaFrutas(frutas);

console.log(frutas_contadas);
