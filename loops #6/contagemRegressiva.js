/*
Implemente um contador regressivo de 10 a 1 usando for, while e do...while
*/

function contagemRegressa() {
    // Loop for
    for(let number = 10; number >= 1; number--) { //Declaração; Condição para a repetição; Decrementação
        console.log(number)
    }
    
    // Loop while
    let number = 10;  //Declaração da variável
    
    while(number >= 1) {
        console.log(number);
        number--; //Decrementação
    }
    
    // Loop do...while
    let numero = 10;
    
    do{
        console.log(numero);
        numero--;
    } while(numero >= 1);

}

contagemRegressa()
    
