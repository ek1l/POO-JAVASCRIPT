let equipamentosDoCarro = {
    preco: 10000,
    calota: true,
    cor : 'Azul',
    aro: 16
}

function Carro(marca) {
    this.marca = marca;
  }


  Carro.prototype = equipamentosDoCarro
  
  let fusca = new Carro("VW", 10000, "Vermelho", 18);

  console.log(fusca.preco)


console.log(equipamentosDoCarro.isPrototypeOf(fusca))