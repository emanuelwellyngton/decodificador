function trataInput (acao) {
    if (inputText.value == 0) {
        alert(`Digite algo para ${acao}`);
    } else {
        resultArea.innerHTML = '';

        let textoMinusculo = inputText.value.toLowerCase();
        let textoSemAcento = textoMinusculo.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        
        if (acao == 'criptografar') criptografar(textoSemAcento);

        if (acao == 'descriptografar') descriptografar(textoSemAcento);
    }
}