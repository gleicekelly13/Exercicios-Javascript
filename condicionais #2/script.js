//Criar uma condicional correta para que o resultado seja TRUE
let x = 10;
let y = 5;
console.log(x > 5);


//Criar uma condicional correta para que o resultado seja FALSE
let w = "10";
let z = 10;
console.log(w === z);

//Criar uma condicional para que o resultado seja TRUE
let a = 10;
let b = 5;
console.log(x != y);

//-------------------------------------------------//

// Multi-condicionais
let idade1 = 18;

if(idade >= 18) {
    if(idade <60) {
        console.log("Você é um adulto")
    }
} //Resultado não é exato 

if(idade1 < 18){  //resultado mais exato
    console.log("Você é uma criança")
} if(idade1 >= 18 && idade1 < 60) {
    console.log("Você é um adulto");
} if (idade1 >= 60) {
    console.log("Você é um idoso")
} 

//--------------------------------------------------//

// Switch
let area = "front-end";

console.log("Área: " + area);

switch(area) {
    case 'back-end':
        console.log('Camisa será Preta');
        break;
    case 'front-end' :
        console.log('Camisa será Azul-Marinho');
        break;
    case 'designer':
        console.log('Camisa será Roxa');
        break
    default:
        console.log('Camisa será Vermelha');
        break;
}
