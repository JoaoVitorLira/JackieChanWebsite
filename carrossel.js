
let indice = 0;

function mover(direcao) {
    const imagens = document.querySelector('.imagens');
    const totalImagens = document.querySelectorAll('.imagem').length;
    indice += direcao;

    if (indice < 0) {
        indice = totalImagens - 1;
    } else if (indice >= totalImagens) {
        indice = 0;
    }

    const deslocamento = -indice * 100;
    imagens.style.transform = `translateX(${deslocamento}%)`;
}
