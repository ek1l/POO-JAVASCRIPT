function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function() {
        console.log("Atirou a " + this.arma)
    }

}



let ninja1 = new Ninja("Naruto", "Shuriken")

console.log(ninja1)

ninja1.atirarArma()


let ninja2 = new Ninja('Sasuke', 'Kunai')

console.log(ninja2)
console.log(ninja2.nome)


ninja2.atirarArma()