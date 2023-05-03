let carro = {
    tipo: "SUV"
}


carro.portas = 4;

console.log(carro.portas)

console.log(carro)

if(carro.tipo == "SUV") {
  carro.tetosolar = true
}

console.log(carro)

carro.acelerar = function() {
  console.log("Vrummmmm")
}


carro.acelerar()