
let num = document.getElementById("func");
let result = document.getElementById("result");

function one() {
    num.value += 1;
}

function two() {
    num.value += 2;
}

function three() {
    num.value += 2;
}

function four() {
    num.value += 4;
}

function five() {
    num.value += 5;
}

function six() {
    num.value += 6;
}

function seven() {
    num.value += 7;
}

function eight() {
    num.value += 8;
}

function nine() {
    num.value += 9;
}

function zero() {
    num.value += 0;
}

function plusMinus() {
    num = -num;
    num.value = num;
    result.innerHTML = num.value;
}

function clean() {
    num.value = "";
}