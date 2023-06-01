let personagem = {
  nome: 'Gleice',
  idade: 32,
  pais: 'Brasil'
}
console.log(personagem);

//---------------------------//
//Um objeto pode ser criado dentro de outro objeto
let personagem = {
  nome:'Gleice',
  idade: 32,
  pais:'Brasil',
  olhos:['verde', 'azul'],
  caracteristicas: {
       força: 20,
       esperteza: 50,
       agilidade: 40
    }
 }
 console.log('${personagem.nome} tem ${personagem.idade anos.');
 console.log(personagem.caracteristicas.esperteza);
 console.log(personagem.olhos[1]);

//---------------------------------------------------------------//
//É possível fazer alteração dentro do próprio array 
 personagem.olhos.push('castanho');
 console.log(personagem.olhos);

//------------------------------------------------------//
//Função dentro de objeto
let pessoa = {
   nome:'Gleice',
   sobrenome:'Kelly',
   idade:32,
   nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
     }
}

console.log(pessoa.nomeCompleto());
