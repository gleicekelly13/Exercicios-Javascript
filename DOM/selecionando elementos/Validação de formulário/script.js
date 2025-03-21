const form = document.querySelector('form');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

function validarFormulario(evento) {
    evento.preventDefault();  // Previne o envio do formulário

    // Limpa mensagens de erro anteriores
    document.querySelectorAll('.erro').forEach(msg => msg.remove());
  
    let valido = true;

    // Validação do email
    if(email.value.trim() === '') {
        mostrarErro(email, "O campo de email é obrigatório.");
        valido = false;
    } else if(!email.value.includes('@')) {
        mostrarErro(email, "Digite um email válido.");
        valido = false;
    }

    // Validação da senha
    if(senha.value.trim() === '') {
        mostrarErro(senha, "O campo de senha é obrigatório.");
        valido = false;
    } else if (senha.value.length < 6) {
        mostrarErro(senha, "A senha deve ter pelo menos 6 caracteres.")
        valido = false;
    }

    // Se tudo estiver válido, exibe a mensagem de sucesso
    if(valido) {
        alert("Enviando seus dados!");
    }
};

// Função para mostrar mensagens de erro
function mostrarErro(campo, mensagem) {
    const erro = document.createElement('p');
    erro.textContent = mensagem;
    erro.classList.add('erro');
    erro.style.color ='red';
    erro.style.fontSize ='14px';
    erro.style.margin = '5px 0';

    // Insere o elemento <p> logo depois do campo input
    campo.insertAdjacentElement('afterend', erro);
}

// Adiciona o evento de validação ao formulário
form.addEventListener('submit', validarFormulario);


