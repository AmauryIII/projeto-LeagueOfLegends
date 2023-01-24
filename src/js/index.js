console.log('Mostrar o document', document);

console.log(document.querySelector(".botao"));

const botaoTrailer = document.querySelector(".botao");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function altermarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    altermarModal();
    video.setAttribute("src", linkDoVideo)
});

    botaoFecharModal.addEventListener("click", () => {
        altermarModal();
        video.setAttribute("src", "");
    });





