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
