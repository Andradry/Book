var palavras = document.getElementsByClassName("texto");
var audio = document.getElementById("audio");
var intervalos = [2000, 3000, 4050, 3400, 4900, 4000, 1000, 2300, 4700, 300, 4000,1500,4200,5000,5000,5000,4400,4000,4400,5000,6000]; // Intervalos de tempo entre a exibição de cada palavra (em milissegundos)

var indiceAtual = 0;
var exibicaoAtiva = false; // Variável para controlar a exibição das palavras
var timeout; // Referência para o temporizador

function exibirPalavra() {
  palavras[indiceAtual].style.opacity = 1;

  timeout = setTimeout(function() {
    palavras[indiceAtual].style.opacity = 1;

    indiceAtual++;

    if (indiceAtual < palavras.length && exibicaoAtiva) {
      exibirPalavra(); // Chama a função recursivamente para exibir a próxima palavra
    } else {
      exibicaoAtiva = false;
      clearTimeout(timeout); // Limpa o temporizador quando todas as palavras foram exibidas
    }
  }, intervalos[indiceAtual]);
}

function toggleAudio() {
  if (exibicaoAtiva) {
    exibicaoAtiva = false;
    clearTimeout(timeout); // Limpa o temporizador se o botão for pressionado novamente durante a exibição das palavras
  } else {
    exibicaoAtiva = true;
    exibirPalavra(); // Inicia a exibição das palavras
  }

  toggleAudioPlayback(); // Toca ou pausa o áudio
}

function toggleAudioPlayback() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}



