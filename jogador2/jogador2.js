
const botaoConfirmar = document.getElementById('botaoConfirmar');

botaoConfirmar.addEventListener('click', () => {
    const palavraEscolhida = document.getElementById('palavraEscolhida');
    const dicaPalavra = document.getElementById('dicaPalavra');

    const palavraEscolhidaValida = validaInput(palavraEscolhida);
    const dicaPalavraValida = validaInput(dicaPalavra);

    if (palavraEscolhidaValida.isValid && dicaPalavraValida.isValid) {
        const dadosDoJogo = { palavra: palavraEscolhida.value, dica: dicaPalavra.value };
        localStorage.setItem('jogoAtual', JSON.stringify(dadosDoJogo));
        window.location.href = 'jogar.html';
        // const dadosSalvos = JSON.parse(localStorage.getItem('jogoAtual'));
        // console.log(dadosSalvos.palavra);
    }
    else{
        alert(palavraEscolhidaValida.message);
        alert(dicaPalavraValida.message);
    }

});

function validaInput(input){
    const regexLetrasEspacos = /^[a-zA-Z\s]+$/;

    if(input.value.trim() === '') {
        return { isValid: false, message: 'O campo deve ser preenchido.' };
    } else if(input.value.length > 46) {
        return { isValid: false, message: 'O campo não pode ter mais de 46 caracteres.' };
    }
    if (!regexLetrasEspacos.test(input.value)) {
        return { isValid: false, message: 'O campo deve conter apenas letras e espaços.' };
    }
    else{
        return { isValid: true, message: '' };
    }
}