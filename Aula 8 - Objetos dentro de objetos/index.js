let pessoa = {
    nome: "Matheus",
    idade: 29,
    falar: function() {
      console.log("Oi, meu nome é Matheus")
    },
    aniversario() {
      this.idade += 1
    },
    dizerIdade() {
      console.log(`A minha idade é: ${this.idade}`)
    },
    podeDirigir: function() {
      if(this.idade >= 18) {
        console.log("Pode dirigir")
      }else {
        console.log("Não pode dirigir")
      }
    },
    caracteristicas: {
        cnh: true,
        carteira: ['dinheiro', 'documento', 'moeda']
    }
  }
  

  console.log(pessoa.caracteristicas)
  console.log(pessoa.caracteristicas.carteira[2])
  
  
  