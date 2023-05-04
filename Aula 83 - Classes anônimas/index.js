let Humano = class {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    nomeDaPessoa() {
        return "O nome da pessoa é " + this.nome 
    }
}


console.log(typeof Humano)

let leonardo = new Humano('Leonardo', 19)

console.log(leonardo)

console.log(leonardo.nome)