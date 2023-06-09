function clicar() {
    console.log("Clicou no botão");
}

let botao = document.querySelector('.botao');
botao.addEventListener("click", () => {
    clicar();
})
