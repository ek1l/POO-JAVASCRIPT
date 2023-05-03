class Calculator {
    constructor() {
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;

    }
    btnPress() {
        console.log('Apertou: ', this)
    }
}


// Start obj

let calc = new Calculator;

console.log(calc)


// Start btns 

let buttons = document.querySelectorAll('.btn');
console.log(buttons)

// map all buttons

for(let i = 0;i < buttons.length; i++) {
    buttons[i].addEventListener('click', calc.btnPress);
}