class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  nomeDaPessoa() {
    return "O nome da pessoa é " + this.nome;
  }
  set mudarNomeDaPessoa(novoNome) {
    this.nome = "Sr " + novoNome;
  }
  get receberNomePessoa() {
    return "O nome da pessoa é: " + this.nome;
  }
}

console.log(typeof Humano);

let leonardo = new Humano("Leonardo", 19);

console.log(leonardo);

console.log(leonardo.nome);

leonardo.mudarNomeDaPessoa = "Leonardo";
console.log(leonardo.nome);
console.log(leonardo.receberNomePessoa);
