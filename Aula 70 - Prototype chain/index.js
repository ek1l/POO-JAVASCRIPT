function Veiculo() {
    this.carenagem = 'aço'
    this.ligar = function() {
        console.log("O veículo ligou")
    }
}



function Trem(tipo) {
    this.tipo = tipo;
    this.vagoes = 50;
}


Trem.prototype = new Veiculo()

let trem = new Trem('trembala')


console.log(trem.tipo)
console.log(Trem.prototype)

trem.ligar()
