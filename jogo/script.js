const basePalavras = [
    { palavra: "abacaxi", dica: "fruta tropical" },
    { palavra: "girassol", dica: "flor amarela" },
    { palavra: "elefante", dica: "animal grande com tromba" },
    { palavra: "computador", dica: "máquina de processamento" },
    { palavra: "praia", dica: "local com areia e mar" },
    { palavra: "montanha", dica: "elevação natural do terreno" },
    { palavra: "chocolate", dica: "doce feito de cacau" },
    { palavra: "aviao", dica: "meio de transporte aéreo" },
    { palavra: "violino", dica: "instrumento musical de cordas" },
    { palavra: "biblioteca", dica: "lugar com muitos livros" },
    { palavra: "astronauta", dica: "profissional que vai ao espaço" },
    { palavra: "bicicleta", dica: "veículo de duas rodas" },
    { palavra: "pinguim", dica: "ave que vive em regiões frias" },
    { palavra: "internet", dica: "rede mundial de computadores" },
    { palavra: "escorregador", dica: "brinquedo de descer" },
    { palavra: "camaleao", dica: "animal que muda de cor" },
    { palavra: "martelo", dica: "ferramenta de bater pregos" },
    { palavra: "relampago", dica: "descarga elétrica no céu" },
    { palavra: "piramide", dica: "monumento do Egito" },
    { palavra: "planeta", dica: "corpo celeste que orbita uma estrela" }
];


const cores = [
  "#0000FF", // Azul
  "#FFFF00", // Amarelo
  "#FF00FF", // Magenta
  "#00FFFF", // Ciano
  "#FFA500", // Laranja
  "#800080", // Roxo
  "#FFC0CB", // rosa  
  "#9932CC", // lilas  
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
    container.appendChild(span);

    if(palavra.length > 12){
      const body = document.getElementsByTagName("body")[0];
      body.style.overflowY = "scroll";
    }
  }
}

function desabilitarTeclado(){
  keys.forEach(key => {
    key.disabled = true;
    if(key.style.backgroundColor !== "green" && key.style.backgroundColor !== "red"){
      key.style.backgroundColor = "#c0c0c0";
    }
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
  if(vidas < 0){
    vidas = 0
  }
  vidasElement.textContent=`Vidas: ${vidas}`;
}

function alertaJogador(msg){
  alert(msg);
}

const palavra = definePalavraDica();

defineTracosPalavra(palavra);
console.log(palavra);

const keys = document.querySelectorAll('.letras-teclado');
const divFlor = document.getElementById("flor");

var letrasCertas = 0;
let vidas = 4

function atualizarFlorVidas(vidas) {
  if(vidas >=1){
    const florAnterior = divFlor.querySelector("img");
    if (florAnterior) {
      divFlor.removeChild(florAnterior);
    }
    const flor = document.createElement("img");
    flor.setAttribute("src", `../FotoFlor/${vidas}_petala.png`);
    flor.setAttribute("width", "200");
    flor.setAttribute("height", "200");
    divFlor.appendChild(flor);
  }
}

function letrasColoridasAleatorias(keys){
  keys.forEach(key => {
    key.style.color = cores[Math.floor(Math.random() * cores.length)];
  });
}

letrasColoridasAleatorias(keys);

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
      alertaJogador("Que pena, você perdeu!");
    }

    if (letrasCertas === palavra.length) {
      mostraPalavra();
      desabilitarTeclado();
      setTimeout(() =>{
        alertaJogador("Parabéns, você ganhou!");
      },100)
    }

  });
});

document.addEventListener('keydown', function(event) {
  const tecladoFisicoLetra = event.key.toLowerCase();
  const keys = document.querySelectorAll('.letras-teclado');
  const keysList = Array.from(keys);

  if (!/^[a-z]$/.test(tecladoFisicoLetra)) {
    return; 
  }

  const keyButton = keysList.find(tecladoVirtual => tecladoVirtual.textContent.toLocaleLowerCase() == tecladoFisicoLetra)

  if (keyButton && !keyButton.disabled) {
    keyButton.click();
  }
});
