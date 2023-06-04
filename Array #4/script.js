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

1
//Operações básicas de array 
2
let ingredientes = ['leite', 'trigo', 'ovo', 'manteiga', 'açúcar'];
3
ingredientes.push('cenoura');
4
console.log(ingredientes);
5
​
6
//1. No array abaixo, qual o número que pega a Ferrari?
7
let carros = ['BMW', 'Ferrari', 'Mercedes'];
8
let x = [1];
9
console.log('1. ' + carros[x]);
10
​
11
//--------------------------------------------------//
12
//2. Troque a Ferrari por Audi
13
console.log('2. Lista com Audi: ');
14
console.log(carros);
15
carros[1] = 'Audi';
16
​
17
//------------------------------------------------------//
18
//3. Adicionar o Volvo à lista
19
console.log('3. Lista com Volvo: ');
20
console.log(carros);
21
​
22
//-------------------------------------------//
23
//4. Exibir quantos itens têm no array
24
console.log('4. itens no array: ');
25
​
26
//------------------------------------------//
27
//É possível colocar um array dentro de um objeto
28
let personagem = {
29
  nome = 'Gleice',
30
  idade = 32,
31
  carros: [
32
    {modelo:'Fiat', cor:'preto'},
33
    {modelo:'Ferrari', cor:'vermelho'}
34
     
35
  ]
36
}
37
console.log(personagem.carros[1].modelo);
38
​
39
//--------------------------------------------------//
40
//Loop dentro do array
41
let cores = ['preto', 'branco', 'azul', 'vermelho'];
42
cores.push('verde');
43
for(let n = 0; n < cores.length; n++) {
44
    console.log(cores[n]);
45
}
46
​
47
//---------------------------------------------------------//
48
//Forma mais resumida
49
let cores = ['preto', 'branco', 'azul', 'vermelho'];
50
cores.push('verde');
51
for(let i in cores) {
52
    console.log(cores[i]); // i vai pegar a cor específica
53
}
54
​
55
//-----------------------------------------------------------//
56
let cores = ['preto', 'branco', 'azul', 'vermelho'];
57
cores.push('verde');
58
for(let cor of cores) { 
59
    console.log(cor);  //cor vai ser o próprio valor
60
}
61
​

//-----------------------------------------------------------//
let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');
for(let cor of cores) { 
    console.log(cor);  //cor vai ser o próprio valor
}
