/*
Calcule a soma dos números ímpares de 1 a 100.
*/

let total = 0

for(let num = 1; num <= 100; num++) {
    if(num % 2 !== 0) {
        total = total + num;
        console.log(total);
    }
}
