/*
Crie um programa para simular um sistema de login:

Defina duas variáveis:
username (string): o nome do usuário correto.
password (string): a senha correta.
Depois, simule uma tentativa de login, verificando:
Se o nome de usuário e a senha estão corretos.
Se ao menos o nome de usuário ou a senha estão corretos.
*/

const username = "Gleice";
const password = "12345";

const userInput = "Gleice";
const passwordInput = "12345"; 

console.log("Acesso permitido? ", userInput === username && passwordInput === password);
