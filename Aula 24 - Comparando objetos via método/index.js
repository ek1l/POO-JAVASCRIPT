let teste = {
  a: 1,
};

let teste2 = {
  a: 1,
};

console.log(Object.is(teste, teste2)); // -> FALSE

console.log(Object.is(NaN, NaN));

console.log(NaN === NaN); // -> FALSE

console.log(+0 === 0); // -> TRUE

let teste3 = teste;

console.log(Objetct.is(teste, teste3)); // -> TRUE
