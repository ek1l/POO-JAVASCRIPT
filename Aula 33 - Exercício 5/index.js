function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.quantidade = 5
    this.atirarArma = function(inimigo) {
       
        if(this.quantidade  <=1) {
            console.log(`As Shurikens acabaram`)
            
        }else {
        console.log(`Atirou a ${this.arma}, ainda temos ${this.quantidade -=1}`)
          inimigo.vivo = false
        }
        
    };
}


function Inimigo(nome) {
    this.nome = nome
    this.vivo = true
}





let chamarClasse = new Ninja('Naruto','Shuriken')
let orochimaru = new Inimigo("Orochimaru")


chamarClasse.atirarArma(orochimaru)
console.log(orochimaru.vivo)