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
  idade: 90,
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
