const operate = function(symbol, a, b){
    SymbolPressed = false;
    first_entry = true;
    let result;
    if (symbol == "+") {
        result = add(a, b);
    }else if(symbol == "-"){
        result = subtract(a, b);
    }else if(symbol == "*"){
        result = multiply(a, b);
    }else if(symbol == "/"){
        result = divide(a, b);
    }
    
    display.textContent = result;

}
const add = function(a, b){
    return parseInt(a) + parseInt(b);
}
const subtract = function(a, b){
    return parseInt(a) - parseInt(b);
}
const multiply = function(a, b){
    return parseInt(a) * parseInt(b);
}
const divide = function(a, b){
    return Math.floor(parseInt(a) / parseInt(b));
}

const display = document.querySelector(".display");

let numbers = document.querySelectorAll('.numbers button');
let symbols = document.querySelectorAll('.symbols button');
let equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
let numA = -1;
let numB = -1;
let sym = '/';
let SymbolPressed = false;
var symbol_element;
let first_entry = true;
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (first_entry && SymbolPressed) {
            display.textContent = '';
            first_entry = false;
            symbol_element.classList.remove("pressed");
            
        }
        display.textContent += number.value;
        console.log(numA);
    });
});
symbols.forEach((symbol) => {
    symbol.addEventListener('click', () => {
        symbol_element = symbol;
        if (SymbolPressed) {
            lockB(display.textContent);
            operate(sym, numA, numB);
        }else{
            console.log(symbol.value);
        }
        lockSym(symbol.value)
        lockA(display.textContent);
        symbol.classList.add("pressed");
        SymbolPressed = true;

    });
});
equals.addEventListener('click', () =>{
    lockB(display.textContent);
    operate(sym, numA, numB)
});
clear.addEventListener('click', () =>{
    display.textContent = '';
    symbol_element.classList.remove("pressed");
    first_entry = true;
    SymbolPressed = false;
});

const lockA = function(num){
    numA = num;
    console.log(num);
}
const lockB = function(num){
    numB = num;
    console.log(num);
}
const lockSym = function(s){
    sym = s;
}