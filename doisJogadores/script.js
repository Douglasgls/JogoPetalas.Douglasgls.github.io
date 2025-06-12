
const botaoConfirmar = document.getElementById('botaoConfirmar');

botaoConfirmar.addEventListener('click', () => {
    const palavraEscolhida = document.getElementById('palavraEscolhida');
    const dicaPalavra = document.getElementById('dicaPalavra');

    const palavraEscolhidaValida = validaInput(palavraEscolhida, 7, 'palavra');
    const dicaPalavraValida = validaInput(dicaPalavra, 25, 'dica');

    if (palavraEscolhidaValida.isValid && dicaPalavraValida.isValid) {
        const dadosDoJogo = { 
            palavra: palavraEscolhida.value,
            dica: dicaPalavra.value
        };
        localStorage.setItem('jogoAtual', JSON.stringify(dadosDoJogo));
        window.location.href = '../jogo/index.html';
    }else{
        if(palavraEscolhidaValida.message !== ''){
            alert(palavraEscolhidaValida.message);
        }

        if(dicaPalavraValida.message !== ''){
            alert(dicaPalavraValida.message);
        }
    }
});

function validaInput(input, maxLength, tipo) {
    const valor = input.value.trim();
    const regexLetras = /^[a-zA-Z]+$/;

    if (valor === '') {
        return { isValid: false, message: `O campo de ${tipo} deve ser preenchido.` };
    } else if (valor.length > maxLength) {
        return { isValid: false, message: `O campo de ${tipo} deve ter no máximo ${maxLength} caracteres.` };
    }

    if (tipo === 'palavra' && !regexLetras.test(valor)) {
        return { isValid: false, message: `A ${tipo} deve conter apenas letras, sem espaços.` };
    }

    return { isValid: true, message: '' };
}