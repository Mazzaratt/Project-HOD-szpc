alert('welcome to Gustavo Mazzaratt project');

/*
    OBJECTIVE - When we click the button, we need to display the corresponding background image.

Step 1 - Find a way to get the HTML element of the buttons.
Step 2 - Find a way to identify the user's click on the button.
Step 3 - Deselect the previously selected button.
Step 4 - Mark the clicked button as selected.
Step 5 - Hide the previously selected image.
Step 6 - Display the image corresponding to the clicked button.
Step 7 - Hide the previously selected dragon information.
Step 8 - Show the dragon information corresponding to the clicked button.
*/

//Step 1 - Find a way to get the HTML element of the buttons.

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//Step 2 - Find a way to identify the user's click on the button.

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

    //Step 3 - Deselect the previously selected button. 

    desactiveSelectedButton();

    //Step 4 - Mark the clicked button as selected.

    botao.classList.add("selecionado");

    //Step 5 - Hide the previously selected image.

    hideImagemActive();

    //Step 6 - Display the image corresponding to the clicked button.

    imagens[indice].classList.add("ativa");

    //Step 7 - Hide the previously selected dragon information.

    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");

    //Step 8 - Show the dragon information corresponding to the clicked button.

    informacoes[indice].classList.add("ativa");  
    });
});

function hideImagemActive() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desactiveSelectedButton() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
