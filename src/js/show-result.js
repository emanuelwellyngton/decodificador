function showResult (result) {
    const resultElemento = document.createElement('p');
    resultElemento.classList.add('result');
    resultElemento.textContent = result;
    resultArea.appendChild(resultElemento);
    lidaComOBotaoCopy(result)
}