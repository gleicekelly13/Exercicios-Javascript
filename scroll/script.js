function subirTela () {
    scrollTo ({
        top:0,
        behavior: "smooth"
    })
    
}

function decidirBotaoScroll () {
    if(window.scrollY === 0) {
        //ocultar botão
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        //mostrar botão
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

//setInterval(decidirBotaoScroll, 1000); //timer para verificar a rolagem a cada segundo (não é a função mais efetiva).

//evento que monitora o scroll da tela, e quando houver alguma modificação, executa a função
window.addEventListener('scroll', decidirBotaoScroll);
