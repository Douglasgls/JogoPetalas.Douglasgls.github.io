const basePalavras = [
    {
        palavra: "banana",
        dica: "fruta"
    },
    {
        palavra: "casa",
        dica: "residencia"
    },
    {
        palavra: "flag",
        dica: "comida"
    },
    {
        palavra: "papel",
        dica: "material de escrita"
    },
]

const jogoAtual = localStorage.getItem('jogoAtual');

const dadosDoJogo = JSON.parse(jogoAtual);

const container = document.getElementsByClassName("palavra-container")[0];

const bntReinicar = document.getElementsByClassName("reiniciar")[0];
const bntVoltar = document.getElementsByClassName("voltar")[0];

bntVoltar.addEventListener('click', () => {
  localStorage.removeItem('jogoAtual');
  window.location.href = '../index.html';
});

bntReinicar.addEventListener('click', () => {
  localStorage.removeItem('jogoAtual');  
  location.reload();
});

function definePalavraDica(){
  const numRandom = Math.floor(Math.random() * basePalavras.length); 
  let palavra = basePalavras[numRandom].palavra;

  let dica = document.getElementsByClassName("dica-texto")[0];
  dica.textContent = basePalavras[numRandom].dica; 

  if(dadosDoJogo !== null){
    if(dadosDoJogo.palavra !== null && dadosDoJogo.dica !== null){
      palavra = dadosDoJogo.palavra;
      dica.textContent = dadosDoJogo.dica;  
    }
  }
  return palavra ;
}

function defineTracosPalavra(palavra){
  for (let i = 0; i < palavra.length; i++) {
    const span = document.createElement("span");
    span.setAttribute("class", "letra");
    span.textContent = "____";
    container.appendChild(span);
  }
}

function desabilitarTeclado(){
  keys.forEach(key => {
    key.disabled = true;
  });
}

function mostraPalavra(){
  const span = document.getElementsByClassName("letra")
  for (let i = 0; i < palavra.length; i++) {
    span[i].textContent = palavra[i].toLocaleUpperCase();
  }
}

function atualizaVidas(vidas){
  const vidasElement=document.querySelector(".vidas");
  vidasElement.textContent=`Vidas: ${vidas}`;
}

const palavra = definePalavraDica();

defineTracosPalavra(palavra);

const keys = document.querySelectorAll('.letras-teclado');
const divFlor = document.getElementById("flor");

var letrasCertas = 0;
let vidas = 4

function atualizarFlorVidas(vidas) {
  if(vidas > 0){
    
    const florAnterior = divFlor.querySelector("img");
    if (florAnterior) {
      divFlor.removeChild(florAnterior);
    }

    const flor = document.createElement("img");
    flor.setAttribute("src", `../FotoFlor/${vidas}_petala.png`);
    flor.setAttribute("width", "200");
    flor.setAttribute("height", "200");
    divFlor.appendChild(flor);
  
  } else {
    keys.forEach(key => {
      key.disabled = true;
      if(key.style.backgroundColor !== "green" && key.style.backgroundColor !== "red"){
        key.style.backgroundColor = "gray";
      }
    });

    setTimeout(() => {
      alert(" Você perdeu!");
    }, 100);

  }
}

keys.forEach(key => {
  key.addEventListener('click', function() {
    const letraPalavra = key.textContent.toLowerCase();
    const span = document.getElementsByClassName("letra");
    var acertou = false;

    for (let i = 0; i < palavra.length; i++) {
      if(palavra[i].toLowerCase() === letraPalavra) {
        span[i].textContent = palavra[i].toLocaleUpperCase();
        span[i].style.fontFamily = "'Sour Gummy', sans-serif";
        acertou = true;
        letrasCertas++;
      }
    }

    key.disabled = true;
    key.style.backgroundColor = acertou ? "green" : "red";

    if (!acertou) {
      vidas--
      atualizarFlorVidas(vidas);
      atualizaVidas(vidas);
    }

    if(vidas === 0){
      mostraPalavra();
      desabilitarTeclado();
    }

    if (letrasCertas === palavra.length) {
      setTimeout(() => {
        alert("Você ganhou!");
      }, 100);
    }

  });
});
