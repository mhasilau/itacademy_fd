const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const backspace = document.getElementById("backspace");
const clearAll = document.getElementById("clearAll");
const clear = document.getElementById("clear");
const plusMinus = document.getElementById("plusMinus");
const sqrtButt = document.getElementById("sqrtButt");
const split = document.getElementById("split");
const percent = document.getElementById("percent");
const multiply = document.getElementById("multiply");
const splitX = document.getElementById("splitX");
const minus = document.getElementById("minus");
const equally = document.getElementById("equally");
const dot = document.getElementById("dot");
const plus = document.getElementById("plus");

let variables = document.getElementById("vars");
let result = document.getElementById("result");

let num = 0;



// function plusClick(sum) {
//     document.variables.value = document.variables.value + sum;
//     result.innerHTML = document.variables.value;
// }

function plusClick() {
    variables += num;
    document.variables.value = document.variables.value + sum;
    result.innerHTML = document.variables.value;
}


// function insert(num) {
//     document.form.textview.value = document.form.textview.value + num;
//     result.innerHTML = document.form.textview.value;
// }

function equallyClick() {
    let inValue = document.variables.value;
    let inEqual = eval(document.variables.value); // eval выполняет значение в скобках
    result.innerHTML = `${inpValue} = ${inpEqual}`;
    document.variables.value = eval(document.variables.value);
}

function zeroClick() {
    variables.value += 0;   
}

function oneClick() {
    variables.value += 1;
}

function twoClick() {
    variables.value += 2;
}

function threeClick() {
    variables.value += 3;
}

function fourClick() {
    variables.value += 4;
}

function fiveClick() {
    variables.value += 5;
}

function sixClick() {
    variables.value += 6;
}

function sevenClick() {
    variables.value += 7;
}

function eightClick() {
    variables.value += 8;
}

function nineClick() {
    variables.value += 9;
}

function splitClick() {
    variables.value += "/";
}

function multiplyClick() {
    variables.value += "*";
}

function minusClick() {
    variables.value += "-";
}

function dotClick() {
    variables.value += ".";
}

function plusClick() {
    variables.value += "+";
}

// function equallyClick() {
    
//     result.innerHTML = variables.value;
//     console.log(variables.value);    
// }
// function equallyClick() {
//     result.innerHTML = result.value;
//     console.log(result.value);    
// }

// console.log(result.value);