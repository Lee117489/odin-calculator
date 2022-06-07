const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, b, op) => {
    if (op == 'add') return add(a, b);
    if (op == 'subtract') return subtract(a, b);
    if (op == 'multiply') return multiply(a, b);
    if (op == 'divide') return divide(a, b);
}

let first, second, op;

const screen = document.querySelector('.screen');
const equals = document.querySelector('.button.equals');
equals.onclick = () => {
    console.log(`first: ${first} second: ${second} op: ${op}`);
    screen.textContent = operate(second, first, op);
}
const clear = document.querySelector('#clear');
clear.onclick = () => {
    first = '';
    second = '';
    op = '';
    screen.textContent = 0;
}


const print = function(e) {
    if (screen.textContent == 0 || first == 0) {
        screen.textContent = '';
        first = '';
    }
    screen.textContent += e.target.innerText;
    first += e.target.innerText;
    console.log(first);
    
}

const choseOp = function(e) {
    second = first;
    first = '';
    op = e.target.id;
    console.log(op);
}

const numberButtons = document.querySelectorAll('.button.number');
numberButtons.forEach(button => button.addEventListener('click', print));

const operatorButtons = document.querySelectorAll('.button.operator');
operatorButtons.forEach(button => button.addEventListener('click', choseOp));





