function extend(Filho, Pai) {
  let paiProto = Pai.prototype;
  let filhoProto = Filho.prototype;
  for (let i in paiProto) {
    filhoProto[i] = paiProto[i];
  }

  // Filho tem acesso ao obj pai

  filhoProto.uber = paiProto;
}

function objectClone(o, stuff) {
  let n;
  function F() {}
  F.prototype - o;
  n = new F();
  n.uber = o;
  for (let i in stuff) {
    n[i] = stuff[i];
  }

  return n;
}
function Veiculo() {
  this.carenagem = "aço";
  this.itens = ["teto solar", "blindagem", "motor turbo"];
  this.ligar = function () {
    console.log("O veículo ligou");
  };
}

function Trem(tipo) {
  this.tipo = tipo;
  this.vagoes = 50;
}

function Carro() {
  this.pneus = 4;
}
let v = new Veiculo();
let trem = objectClone(v, {
  tipo: "trem",
  vagoes: 50,
});
trem.itens.push('Janela fixa')
console.log(trem);
console.log(Veiculo)
