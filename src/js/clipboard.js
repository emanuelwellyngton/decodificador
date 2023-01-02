function lidaComOBotaoCopy (texto) {
    const botaoCopiar = document.createElement('button');
    botaoCopiar.classList.add('botao-copiar');
    botaoCopiar.textContent = 'Copiar';
    resultArea.appendChild(botaoCopiar);


    botaoCopiar.addEventListener("click", () => {
        navigator.clipboard.writeText(texto);
        botaoCopiar.classList.add('active');
        botaoCopiar.textContent = 'Copiado';
        setInterval((() => {
            botaoCopiar.textContent = 'Copiar';
            botaoCopiar.classList.remove('active');
        }), 5000);
    });
}