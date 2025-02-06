/*
Exiba todos os números pares entre 1 e 50 usando um loop for.
*/

/*for(let num = 1; num <= 50; num++) {
    if(num % 2 === 0) {
        console.log(num);
    }
};*/

//Forma alternativa (para evitar o if)
for(let num = 2; num <= 50; num += 2) {
    console.log(num);
}
