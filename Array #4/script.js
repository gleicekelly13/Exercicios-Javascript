//Operações básicas de array 
let ingredientes = ['leite', 'trigo', 'ovo', 'manteiga', 'açúcar'];
ingredientes.push('cenoura');
console.log(ingredientes);

//------------------------------------------------------//
//1. No array abaixo, qual o número que pega a Ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = [1];
console.log('1. ' + carros[x]);

//--------------------------------------------------//
//2. Troque a Ferrari por Audi
console.log('2. Lista com Audi: ');
console.log(carros);
carros[1] = 'Audi';

//------------------------------------------------------//
//3. Adicionar o Volvo à lista
console.log('3. Lista com Volvo: ');
console.log(carros);

//-------------------------------------------//
//4. Exibir quantos itens têm no array
console.log('4. itens no array: ');

//------------------------------------------//
//É possível colocar um array dentro de um objeto
let personagem = {
  nome = 'Gleice',
  idade = 32,
  carros: [
    {modelo:'Fiat', cor:'preto'},
    {modelo:'Ferrari', cor:'vermelho'}
     
  ]
}
console.log(personagem.carros[1].modelo);

//--------------------------------------------------//
//Loop dentro do array
let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');
for(let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
}

//---------------------------------------------------------//
//Forma mais resumida
let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');
for(let i in cores) {
    console.log(cores[i]);
}

//Operações básicas de array 
let ingredientes = ['leite', 'trigo', 'ovo', 'manteiga', 'açúcar'];
ingredientes.push('cenoura');
console.log(ingredientes);

//-----------------------------------------------------------//
//É possível colocar um array dentro de um objeto
let personagem = {
  nome = 'Gleice',
  idade = 32,
  carros: [
    {modelo:'Fiat', cor:'preto'},
    {modelo:'Ferrari', cor:'vermelho'}
  ]
}
console.log(personagem.carros[1].modelo);

//--------------------------------------------------//
//Loop dentro do array
let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');
for(let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
}

//---------------------------------------------------------//
//Forma mais resumida
let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');
for(let i in cores) {
    console.log(cores[i]); // i vai pegar a cor específica
}
//-----------------------------------------------------------//
let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');
for(let cor of cores) { 
    console.log(cor);  //cor vai ser o próprio valor
}

//-----------------------------------------------------------//
let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');
for(let cor of cores) { 
    console.log(cor);  //cor vai ser o próprio valor
}

//---------------------------------------------------------//
//Função que retorna um novo array
let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra'];

let bigFruits = fruits.filter((item) => {
    return item.length > 4;
})
console.log(bigFruits);

//--------------------------------------------------------//
//Ordenação de array
let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];
fruits.sort();  //Altera a ordem do array em ordem alfabética
fruits.reverse();  //Inverte a ordem do array

//-------------------------------------------------------------//
let cars = [
    {brand:'Fiat', year:2022},
    {brand:'BMW', year:2018},
    {brand:'Ferrari', year:2020}
]

cars.sort((a,b) =>{
    if(a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0
    }
})
console.log(cars);
  
//------------------------------------------------//
let cars = [
    {brand:'Fiat', year:2022},
    {brand:'BMW', year:2018},
    {brand:'Ferrari', year:2020},
    {brand:'Wolsksvagem', year:1990}
]
cars.sort((a,b) => {
    return a.year - b.year;
});
console.log(cars);
