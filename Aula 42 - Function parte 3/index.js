let a = {
  nome: "Leonardo",
  dizerNome() {
    console.log(`O nome deste objeto é ${this.nome}`);
  },
};

let b = {
  nome: "João",
};

let c = {
  nome: "Pedro",
};
a.dizerNome();
a.dizerNome.call(b);
a.dizerNome.call(c);
