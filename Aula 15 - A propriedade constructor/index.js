function criarArvore(especie,temFruto ) {
    return {
        especie: especie,
        temFruto: temFruto
    }
}


let laranjeira = criarArvore('laranjeira', true)

console.log(laranjeira)
console.log(laranjeira.constructor)


function Heroi(nome, classe) {
  this.nome = nome,
  this.lasse = classe
}


let jaspion = new Heroi('Jaspion', 'Robô')

console.log(jaspion)
console.log(jaspion.constructor)



let obj = {
  teste: 'teste'
}

console.log(obj.constructor)
