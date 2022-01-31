let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

//funcao do carro

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaInicioCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    if (passouTela(xCarros[i])) {
      xCarros[i] = 600;
  }
  }
}

function passouTela(xCarro) {
  return xCarro < -50;
}
