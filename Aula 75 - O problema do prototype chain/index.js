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

// Copiando só o prototype, em vez de instanciar uma classe
Trem.prototype = Veiculo.prototype;

Carro.prototype = Veiculo.prototype;

let trem = new Trem("trem bala");
let ferrari = new Carro();
let trembala = new Trem('Trem Bala')

Carro.prototype.ligar = function() {
    console.log("O carro ligou")
}

trem.ligar()

trembala.ligar()
ferrari.ligar()

console.log(trembala.carenagem)