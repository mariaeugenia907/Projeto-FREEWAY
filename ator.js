//variaveis ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let pontos = 0; 

//funcao ator

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(podeMover()) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao) {
      voltaAtorInicio();
      somDaColisao.play();
    if (pontosMaiorQueZero()){
      pontos -= 1;
      }
    }
  }
}

function voltaAtorInicio() {
  yAtor = 366;
}

function incluiPontos() {
  fill(color(255,255,0));
  textAlign(CENTER);
  textSize(25);
  text(pontos, width/5, 25);
}

function marcaPonto() {
  if (yAtor < 15) {
    pontos += 1;
    somDoPonto.play();
    voltaAtorInicio();
  }
}

function pontosMaiorQueZero() {
  return pontos > 0;
}

function podeMover() {
  return yAtor < 366;
}