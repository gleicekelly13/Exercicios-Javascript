const alerta = "verde";
let mensagem = "";

if(alerta == "verde") {
    mensagem = "Nenhum problema encontrado";
} else if (alerta == "vermelho") {
    mensagem = "Não saia de casa, chuva forte";
} else {
    mensagem = "Cuidado, hoje vai chover";
}

console.log(mensagem)
