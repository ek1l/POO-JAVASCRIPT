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

function Carro() {
    this.pneus = 4
}


Trem.prototype = new Veiculo()
Carro.prototype = new Veiculo()
let trem = new Trem('trembala')
let ferrari = new Carro()


console.log(trem instanceof  Trem)
console.log(ferrari instanceof Carro)
console.log(trem instanceof  Veiculo)
console.log(ferrari instanceof Veiculo)


console.log(trem instanceof  Object)
console.log(ferrari instanceof Object)

