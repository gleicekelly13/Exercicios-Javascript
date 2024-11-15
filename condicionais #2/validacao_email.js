let email_acesso = "gleice.kelly22@hotmail.com";

let email_cadastro = "GLEICE.KELLY22@hotmail.com";

if(email_acesso.toLocaleLowerCase() == email_cadastro.toLocaleLowerCase()) {

    console.log("Foi enviado um link de ativação para o seu email");
} else {
    console.log("Esse email não existe em nossa base de dados");
}
