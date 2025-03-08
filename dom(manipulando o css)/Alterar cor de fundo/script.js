// Pega o elemento pelo ID corretamente
const divNovaCor = document.getElementById('quadrado');

function mudarCor() {
    divNovaCor.style.backgroundColor = 'red';
}

function retornaPrimeiraCor () {
    divNovaCor.style.backgroundColor = 'blue';
}

//Adiciona os eventos
divNovaCor.addEventListener('mouseover', mudarCor);
divNovaCor.addEventListener('mouseout', retornaPrimeiraCor); 

//MÉTODO UTILIZANDO `toggle`
/*const divNovaCor = document.getElementById('quadrado');

function mudarCor() {
    divNovaCor.classList.toggle('ativo'); //´toggle´ alterna, se não tiver a classe ele adiciona, se tiver, ele remove
}

divNovaCor.addEventListener('mouseover', mudarCor);
divNovaCor.addEventListener('mouseout', mudarCor);
*/
