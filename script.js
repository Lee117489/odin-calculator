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

let first = 0;
let second = 0;
let op = '';

const numberBtns = document.querySelectorAll('.button.number');
numberBtns.forEach(button => button.addEventListener('click', getNumber));

const operatorBtns = document.querySelectorAll('.button.operator');
operatorBtns.forEach(button => button.addEventListener('click', choseOperator));

const screen = document.querySelector('.screen');

const equalsBtn = document.querySelector('.button.equals');
equalsBtn.onclick = evaluate;
    
const clearBtn = document.querySelector('#clear');
clearBtn.onclick = clear;

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', addDecimal);

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', deleteFunc);
    

function clear() {
    first = 0;
    second = 0;
    op = '';
    screen.textContent = '0';
    decimalBtn.disabled = false;
}

function evaluate() {
    first = Number(first);
    second = Number(second);
    if (op == '' || op == undefined) {
        return;
    }
    if (op == 'divide' && first == 0) {
        screen.textContent = `Division by zero..`;
        return;
    }
    
    console.log(`---Evaluation---`);
    console.log(`First: ${typeof(first)} ${first} Second: ${typeof(second)} ${second} Op: ${op}`);
    second = operate(second, first, op);
    screen.textContent = second;
    decimalBtn.disabled = false;
}

function getNumber(e) {
    if (screen.textContent === '0' || first === 0) {
        first = '';
        screen.textContent = first;
    }
    if (first == '0.' || first == '.') {
        first = '0.'
        screen.textContent = first;
    }
  
    first += e.target.innerText;
    screen.textContent = first;
}

function choseOperator(e) {
    console.log(`second: ${second}`);
    if (second === undefined || second == 0) {
        second = first;
    }
    else evaluate();
    first = 0;
    op = e.target.id;
    decimalBtn.disabled = false;
}

function addDecimal(e) {
    first += e.target.innerText;
    screen.textContent = first;
    decimalBtn.disabled = true;
}

function deleteFunc() {
    if (first.length > 0) {
        first = first.slice(0, first.length-1);
        screen.textContent = first;
    }
}