function Ninja(nome, arma) {
  (this.nome = nome), (this.arma = arma);
}

const naruto = new Ninja("Naruto", "Shuriken");
const rocklee = new Ninja("Rock Lee", "punhos");
const cloneDoNaruro = new Ninja("Naruto", "Shuriken");
const cloneVerdadeiroDoNaruto = naruto;

console.log(naruto === rocklee);
console.log(naruto === cloneDoNaruro);
console.log(naruto === cloneVerdadeiroDoNaruto);
