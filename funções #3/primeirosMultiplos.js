function primeirosMultiplos (x, n) {
    let multiplos = [];  // Cria um array vazio para armazenar os múltiplos

    for (let i= 1 ; i <= n; i ++) {  //O loop começa em i = 1 e vai até n (inclusive).
        multiplos.push(x * i);  // Calcula o múltiplo de x e adiciona ao array
    }

    return multiplos  // Retorna o array com os múltiplos
}

console.log(primeirosMultiplos(2, 10));
