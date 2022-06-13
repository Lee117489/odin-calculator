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
const equalsBtn = document.querySelector('.button.equals');
equalsBtn.onclick = evaluate;
    
const clearBtn = document.querySelector('#clear');
clearBtn.onclick = clear;
    

function clear() {
    first = 0;
    second = 0;
    op = '';
    screen.textContent = 0;
}

function evaluate() {
    first = Number(first);
    second = Number(second);
    console.log(`---Evaluation---`);
    console.log(`first: ${typeof(first)} ${first} second: ${typeof(second)} ${second} op: ${op}`);
    result = operate(second, first, op);
    console.log(`Result: ${result}`);
    screen.textContent = result;
    second = result;
}

function getNumber(e) {
    if (screen.textContent == 0 || first == 0) {
        screen.textContent = '';
        first = '';
    }
    screen.textContent += e.target.innerText;
    first += e.target.innerText;
    console.log(first);
}

function choseOperator(e) {
    
    console.log(`second: ${second}`);
    if (second === undefined || second == '') {
        second = first;
        first = 0;
        op = e.target.id;
    }
    else {
        evaluate();
        first = 0;
        op = e.target.id;
    }
}
        

const numberButtons = document.querySelectorAll('.button.number');
numberButtons.forEach(button => button.addEventListener('click', getNumber));

const operatorButtons = document.querySelectorAll('.button.operator');
operatorButtons.forEach(button => button.addEventListener('click', choseOperator));