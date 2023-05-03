// regex != regexp

let palavra = new RegExp(/at/)
console.log(palavra.test("Bola"))
console.log(palavra.test("Caminhão"))
console.log(palavra.test("Matheus"))