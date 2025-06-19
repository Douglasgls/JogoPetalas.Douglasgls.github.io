const basePalavras = [
    { palavra: "cenoura", dica: "legume alaranjado" },
    { palavra: "cachorro", dica: "animal doméstico fiel" },
    { palavra: "sanduiche", dica: "lanche com pão e recheio" },
    { palavra: "escola", dica: "lugar de aprendizado" },
    { palavra: "tigre", dica: "felino listrado" },
    { palavra: "microfone", dica: "capta som para gravação" },
    { palavra: "janela", dica: "abertura na parede para luz" },
    { palavra: "almofada", dica: "objeto macio de apoio" },
    { palavra: "cavalo", dica: "animal usado para montaria" },
    { palavra: "travesseiro", dica: "apoio para a cabeça ao dormir" },
    { palavra: "lapis", dica: "objeto para escrever ou desenhar" },
    { palavra: "espelho", dica: "reflete a imagem" },
    { palavra: "tartaruga", dica: "animal com casco" },
    { palavra: "telefone", dica: "usado para ligações" },
    { palavra: "relogio", dica: "marca as horas" },
    { palavra: "nuvem", dica: "massa de vapor no céu" },
    { palavra: "fada", dica: "ser mágico com asas" },
    { palavra: "arvore", dica: "planta com tronco" },
    { palavra: "baleia", dica: "maior animal do oceano" },
    { palavra: "lampada", dica: "emite luz artificial" },
    { palavra: "banco", dica: "instituição financeira" },
    { palavra: "tesoura", dica: "usada para cortar" },
    { palavra: "janela", dica: "abertura para ver o lado de fora" },
    { palavra: "formiga", dica: "inseto que vive em colônias" },
    { palavra: "piano", dica: "instrumento musical com teclas" },
    { palavra: "chuveiro", dica: "onde tomamos banho" },
    { palavra: "gelo", dica: "água em estado sólido" },
    { palavra: "leite", dica: "bebida branca de origem animal" },
    { palavra: "ventilador", dica: "gera vento artificial" },
    { palavra: "quadro", dica: "usado para desenhar ou decorar" },
    { palavra: "alface", dica: "folha usada em saladas" },
    { palavra: "pente", dica: "usado para arrumar o cabelo" },
    { palavra: "trem", dica: "meio de transporte ferroviário" },
    { palavra: "patins", dica: "usado para deslizar no chão" },
    { palavra: "colher", dica: "talher de pegar líquidos" },
    { palavra: "sino", dica: "objeto que faz som metálico" },
    { palavra: "aviador", dica: "piloto de avião" },
    { palavra: "soldado", dica: "profissional das forças armadas" },
    { palavra: "rio", dica: "curso de água natural" },
    { palavra: "neve", dica: "forma congelada da água" },
    { palavra: "morcego", dica: "mamífero que voa" },
    { palavra: "dentista", dica: "cuida dos dentes" },
    { palavra: "escova", dica: "usada para limpar ou pentear" },
    { palavra: "fogao", dica: "usado para cozinhar" },
    { palavra: "colher", dica: "talher usado para sopas" },
    { palavra: "garrafa", dica: "recipiente para líquidos" },
    { palavra: "tapete", dica: "cobre o chão" },
    { palavra: "pirata", dica: "ladrão dos mares" },
    { palavra: "brinquedo", dica: "objeto usado para diversão" },
    { palavra: "drone", dica: "aeronave controlada remotamente" },
    { palavra: "livro", dica: "conjunto de páginas com texto" },
    { palavra: "planilha", dica: "documento para cálculos" },
    { palavra: "caderno", dica: "usado para anotações" },
    { palavra: "pincel", dica: "usado para pintar" },
    { palavra: "escada", dica: "usada para subir" },
    { palavra: "cozinha", dica: "onde se prepara comida" },
    { palavra: "fogos", dica: "explodem em festas" },
    { palavra: "balanco", dica: "brinquedo que vai pra frente e trás" },
    { palavra: "buzina", dica: "faz barulho no carro" },
    { palavra: "cadeado", dica: "usado para trancar" },
    { palavra: "cadeira", dica: "serve para sentar" },
    { palavra: "botao", dica: "usado para fechar roupa" },
    { palavra: "feijao", dica: "grão comum na culinária brasileira" },
    { palavra: "anel", dica: "joia para o dedo" },
    { palavra: "passarinho", dica: "ave pequena que canta" },
    { palavra: "jardim", dica: "área com flores e plantas" },
    { palavra: "cinema", dica: "lugar para ver filmes" },
    { palavra: "cinto", dica: "segura a calça" },
    { palavra: "tijolo", dica: "usado na construção" },
    { palavra: "tinta", dica: "usada para colorir" },
    { palavra: "caneta", dica: "usada para escrever com tinta" },
    { palavra: "chuva", dica: "água que cai do céu" },
    { palavra: "colchao", dica: "usado para dormir" },
    { palavra: "mochila", dica: "usada para carregar objetos nas costas" },
    { palavra: "aviao", dica: "meio de transporte aéreo" },
    { palavra: "abajur", dica: "luminária de mesa" },
    { palavra: "computador", dica: "máquina usada para tarefas digitais" },
    { palavra: "impressora", dica: "usada para imprimir" },
    { palavra: "bicicleta", dica: "meio de transporte com pedais" },
    { palavra: "escorregador", dica: "brinquedo de parque" },
    { palavra: "pintor", dica: "profissional que trabalha com tintas" },
    { palavra: "garagem", dica: "onde guardamos carros" },
    { palavra: "camisa", dica: "roupa de parte superior" },
    { palavra: "calca", dica: "roupa para as pernas" },
    { palavra: "chinelo", dica: "calçado de verão" },
    { palavra: "computador", dica: "máquina de processar dados" },
    { palavra: "papel", dica: "superfície para escrever" },
    { palavra: "sabonete", dica: "usado para lavar o corpo" },
    { palavra: "sacola", dica: "usada para carregar compras" },
    { palavra: "bateria", dica: "fonte de energia portátil" },
    { palavra: "joaninha", dica: "inseto vermelho com pintas pretas" },
    { palavra: "zebra", dica: "animal listrado" },
    { palavra: "girafa", dica: "animal de pescoço longo" },
    { palavra: "rolo", dica: "cilindro que gira" },
    { palavra: "grama", dica: "cobertura verde do solo" },
    { palavra: "barco", dica: "veículo aquático" },
    { palavra: "escudo", dica: "protege em batalhas" },
    { palavra: "tatu", dica: "animal com casco" },
    { palavra: "abelha", dica: "produz mel" },
    { palavra: "papagaio", dica: "ave que repete palavras" },
    { palavra: "polvo", dica: "animal com oito braços" },
    { palavra: "cacto", dica: "planta do deserto" }
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
      key.style.backgroundColor = "#gray";
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


function startConfetti() {
  console.log('startConfetti');
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
      return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 250);
}

function musicaPerdedor(){
  const musicaPerdedor = document.getElementById("trompeta");
  musicaPerdedor.play()
}

function musicaVencedor(){
  const musicaVencedor = document.getElementById("vencedor");
  musicaVencedor.play()
}

const palavra = definePalavraDica();

defineTracosPalavra(palavra);
console.log(palavra);

const keys = document.querySelectorAll('.letras-teclado');
const divFlor = document.getElementById("flor");

var letrasCertas = 0;
let vidas = 4

async function atualizarFlorVidas(vidas) {
  if(vidas >=0){
    const florAnterior = divFlor.querySelector("img");
    if (florAnterior) {
      divFlor.removeChild(florAnterior);
    }
    const flor = document.createElement("img");
    flor.setAttribute("src", `../FotoFlor/${vidas}_petala.jpg`);
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
function reiniciarJogo(){
  setTimeout(() => {
    location.reload();
    alertaJogador("O jogo sera reiniciado em 3 segundos");
  }, 3000);
}
letrasColoridasAleatorias(keys);

keys.forEach(key => {
  key.addEventListener('click', async function() {
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
      atualizarFlorVidas(vidas);
      musicaPerdedor();
      setTimeout(() =>{
        alertaJogador("Que pena, você perdeu!");
      },100)
      reiniciarJogo();
    }

    if (letrasCertas === palavra.length) {
      mostraPalavra();
      desabilitarTeclado();
      musicaVencedor();
      startConfetti();
      reiniciarJogo();
      // setTimeout(() =>{
      //   alertaJogador("Parabéns, você ganhou!");
      // },100)
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
