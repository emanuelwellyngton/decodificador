const btnCriptografar = document.querySelector("#btn-criptografar");
const btnDescriptografar = document.querySelector("#btn-descriptografar");
const inputText = document.querySelector("#input-text");
const resultArea = document.querySelector("#result-area");
const result = document.querySelector('.result');

btnCriptografar.addEventListener("click", () => {
    trataInput('criptografar');
});

btnDescriptografar.addEventListener("click", () => {
    trataInput('descriptografar');
});