function extend(Filho, Pai) {
  let F = function () {};

  F.prototype = Pai.prototype;

  Filho.prototype = new F();
}
function Veiculo() {}

Veiculo.prototype.carenagem = "aço";
Veiculo.prototype.ligar = function () {
  console.log("O veículo ligou");
};

function Trem(tipo) {
  this.tipo = tipo;
}

Trem.prototype.vagoes = 50;

function Carro() {}

Carro.prototype.pneus = 4;


// Construtor temporário por função

extend(Trem,Veiculo)
extend(Carro,Veiculo)

let trem = new Trem("trem bala");
let ferrari = new Carro();
let trembala = new Trem("Trem Bala");

Carro.prototype.ligar = function () {
  console.log("O carro ligou");
};

Trem.prototype.ligar = function () {
  console.log("Piuiiii");
};

trem.ligar();
trembala.ligar();
ferrari.ligar();

