function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.quantidade = 5
    this.atirarArma = function() {
       
        if(this.quantidade  <=1) {
            return `As Shurikens acabaram`
        }else {
            return  `Atirou a ${this.arma}, ainda temos ${this.quantidade -=1}`
        }
        
    };
}

let chamarClasse = new Ninja('Naruto','Shuriken')
chamarClasse.atirarArma()
chamarClasse.atirarArma()
chamarClasse.atirarArma()
chamarClasse.atirarArma()
chamarClasse.atirarArma()