function testeFun(param1, param2) {  // param1 e param2 são parâmetros
    console.log(param1 + param2);
}
testeFun("Gleice ", "Kelly"); //As strings "Gleice" e "Kelly" são argumentos

//--------------------------------------------------------------------------//

function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado);
}
somar(10, 15); // 10 e 15 são argumentos

//---------------------------------------------------//

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}
nomeCompleto("Gleice", "Kelly");  //essa função pode ser usada quantas vezes quiser

//---------------------------------------------------------------------------------//
//Função com retorno condicional

function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
}
let verificacao = maiorDeIdade(18);
console.log(verificacao);

//------------------------------------------------------------//

function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
} 

let idade = 18;
let verificacao = maiorDeIdade(idade);

    if (verificacao) {
    console.log('É maior de idade');
    } else {
        console.log('É menor de idade');
    }
  
//------------------------------------------//
function calcPct(x, y) {
    return (y / x) * 100
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`)
    
//---------------------------------//
//Exercício: criar uma função que valide usuário e senha
function validar(usuário, senha) {
   if(usuário == "Gleice" && senha == 123) {
      console.log('Acesso concedido');

 } else {
      console.log('Acesso negado');
}
let usuário = "Gleice";
let senha = 123;
validacao = validar(usuario, senha);

//---------------------------------------//
function validar(usuario, senha) {
    if(usuario == "Gleice" && senha == 123) {
       return true 
   } else {
       return false 
   }    
}
let usuario = "gleice";
let senha = 123;
let validacao = validar(usuario, senha);
if(validacao) {
    console.log("Acesso concedido");
} else {
    console.log("Acesso negado");
}
   
//-----------------------------------------//
 funciona calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;
     
    switch(quartos) {
       case1:
           preco = metragem * m2;
            break;
       case2:
           preco = metragem * (m2 * 1.2);
           break;
       case3:
           preco = metragem * (m2 * 1.5);
           break;
    

      }
      return preco;
 }
 let metragem = 123;
 let quartos = 3;
 let preco = calcularImovel(metragem, quartos);
 console.log(`A casa custa R$ ${preco});
 //---------------------------------------------//
 //arrow function
 const somar = (x, y) => {
    return x + y;
 }
 console.log(somar(10, 5));
 
 //--------------------------------------------//
 //forma mais resumida 
 
 const somar = (x, y) => x + y;
 console.log(somar(10, 5));
