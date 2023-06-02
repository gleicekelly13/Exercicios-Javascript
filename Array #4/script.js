//Operações básicas de array 
let ingredientes = ['leite', 'trigo', 'ovo', 'manteiga', 'açúcar'];
ingredientes.push('cenoura');
console.log(ingredientes);

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
