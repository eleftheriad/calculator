const operate = function(symbol, a, b){
    SymbolPressed = false;
    let result;
    if (symbol == "+") {
        result = add(a, b);
    }//else subtract...
    display.textContent = result;
}
const add = function(a, b){
    return parseInt(a) + parseInt(b);
}

const display = document.querySelector(".display");


let numbers = document.querySelectorAll('.numbers button');
let symbols = document.querySelectorAll('.symbols button');
let equals = document.querySelector('.equals');
let numA = -1;
let numB = -1;
let sym = '/';
let SymbolPressed = false;
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (isNaN(display.textContent)) {
            display.textContent = '';
        }
        display.textContent += number.value;
        console.log(numA);

    });
});
symbols.forEach((symbol) => {
    symbol.addEventListener('click', () => {
        console.log(symbol.value);
        

        if (SymbolPressed) {
            lockB(display.textContent);
            lockSym(symbol.value);
            operate(sym, numA, numB)
        }else{
            lockA(display.textContent)
            display.textContent = symbol.value;
            lockSym(symbol.value);
        }
        SymbolPressed = true;
    });
});
equals.addEventListener('click', () =>{
    lockB(display.textContent);
    operate(sym, numA, numB)
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