function extend(Filho, Pai) {
    let paiProto = Pai.prototype
    let filhoProto = Filho.prototype
    for(let i in paiProto) {
        filhoProto[i] = paiProto[i]
    }

    // Filho tem acesso ao obj pai

    filhoProto.uber = paiProto
}
  function Veiculo() {}
  
  Veiculo.prototype.carenagem = "aço";
  Veiculo.prototype.itens = ['teto solar', 'blindagem', 'motor turbo']
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
  

  Trem.prototype.itens.push('janelas fixas');

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
  
  console.log(trem)
  