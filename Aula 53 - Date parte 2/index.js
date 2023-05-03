let data = new Date();
console.log(data);
console.log(data.setMonth(2));

console.log(new Date(data.setMonth(0)));

console.log(Date.now());

console.log(new Date(Date.now()));

console.log(Date.parse(new Date(data.setMonth(0))));
