/* clicar () {
    const button = document.querySelector('button');

    /*if(button.classList.contains('azul')) {
        button.classList.remove('azul');
        button.classList.add('verde');
    } else {
        button.classList.add('azul');
        button.classList.remove('verde');
    } 

//----------------------------------------------------------//
//button.classList.toggle('azul'); se não tiver, ele adiciona; se tiver, ele remove
    
    //button.classList.replace('azul', 'verde');

    if(button.classList.contains('azul')) {
        button.classList.replace('azul', 'verde');
    } else {
        button.classList.replace('verde', 'azul');
    } 
} */

function verde () {
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('verde');
}

function vermelho () {
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('vermelho');
}

function azul () {
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.add('azul');
}
