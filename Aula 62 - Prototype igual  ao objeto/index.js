function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
  this.calota = true;
}

Carro.prototype.cor = "preto";
Carro.prototype.calota = false;

let fusca = new Carro("VW", 10000);

console.log(fusca.cor);

fusca.cor = "rosa";
console.log(fusca.cor);

console.log(fusca.calota);
