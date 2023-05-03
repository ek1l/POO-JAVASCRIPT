let pessoa = {
    nome: "Leonardo",
  getNome(){
    console.log("Esse é o nome do obj: " + this.nome)
  }
    
}

let pessoa2 = {
age: 12
}


Object.assign(pessoa2,pessoa)
console.log(pessoa2)
pessoa2.getNome()

pessoa2.nome = "João"

console.log(pessoa2)