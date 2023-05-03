function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

Carro.prototype = {
  rodas: 4,
  portas: 4,
  ligar() {
    console.log("O carro ligou");
  },
};

Carro.prototype.aro = 20

let bmw = new Carro("BMW", 100000);

console.log(bmw);

console.log(bmw.rodas);
console.log(bmw.portas);

bmw.ligar();


console.log(bmw.aro)
