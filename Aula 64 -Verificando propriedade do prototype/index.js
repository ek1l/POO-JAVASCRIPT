function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
  }
  
  Carro.prototype.cor = "preto";
  Carro.prototype.calota = false;
  
  let fusca = new Carro("VW", 10000);


  console.log(fusca.hasOwnProperty('marca'))
    console.log(fusca.constructor.prototype.hasOwnProperty('marca'))



Carro.prototype.marca = 'Teste'
console.log(fusca.constructor.prototype.hasOwnProperty('marca'))
