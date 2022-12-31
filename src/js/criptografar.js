function criptografar (input) {
    let texto = input;
    let characters = texto.split('');

    for (var i = 0; i < characters.length; i++) {
        if (characters[i] == 'e') characters[i] = 'enter';
        if (characters[i] == 'i') characters[i] = 'imes';
        if (characters[i] == 'a') characters[i] = 'ai';
        if (characters[i] == 'o') characters[i] = 'ober';
        if (characters[i] == 'u') characters[i] = 'ufat';
    }

    charCriptografado = characters;
    textoCriptografado = characters.join('');

    showResult(textoCriptografado);
}