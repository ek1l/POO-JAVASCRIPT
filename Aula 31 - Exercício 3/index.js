function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;

    this.atirarArma = function() {
        console.log(`Atirou a ${this.arma}`);
    };
}

let chamarClasse = new Ninja('Naruto','Shuriken')
chamarClasse.atirarArma()