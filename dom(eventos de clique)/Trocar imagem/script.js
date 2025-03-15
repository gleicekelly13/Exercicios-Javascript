/*
2. Trocando uma imagem dinamicamente
Objetivo: Ao clicar em um botão, altere a imagem exibida.

Passos:

Adicione uma <img> com um src inicial.
Crie um botão "Trocar Imagem".
Quando o botão for clicado, altere o atributo src da <img> para uma nova imagem.
*/

const img_cafeteria = document.querySelector('#img-cafeteria');
const botao = document.querySelector('#botao');

function trocarImagem() {
    if(img_cafeteria.src.endsWith("images/capa_linkedin1.jpg")) {
        img_cafeteria.src = "images/capa_linkedin2.webp";
    } else {
        img_cafeteria.src = "images/capa_linkedin1.jpg";
    }
}

botao.addEventListener('click', trocarImagem);

/*
`endsWith` garante que a verificação é feita apenas no final do src, evitando problemas com caminhos absolutos.
*/
