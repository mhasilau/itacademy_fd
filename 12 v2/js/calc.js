let num = document.getElementById("board").innerHTML;

function clearBoard() {
    document.getElementById("board").innerHTML = " ";
}

// процент от конечного числа
function percent() {
    let perc = document.getElementById("board").innerHTML;
    num = perc / 100;
    document.getElementById("board").innerHTML = num;
}

function display(value) {
    document.getElementById("board").innerHTML += value;
}

function getAnswer() {
    let strBoard = document.getElementById("board").innerHTML;
    let result = eval(strBoard);
    document.getElementById('board').innerHTML = result.toFixed(3);
}

function plusMinus() {
    let minus = document.getElementById("board").innerHTML;
    minus *= -1;
    document.getElementById("board").innerHTML = minus;
}

function sqrt() {
    let sqrt = document.getElementById("board").innerHTML;
    num = Math.sqrt (sqrt);
    document.getElementById("board").innerHTML = num;
}

function splitX() {
    let split = document.getElementById("board").innerHTML;
    num = 1/split;
    document.getElementById("board").innerHTML = num;
}

// function backspace() {
//     let num = document.getElementById("board").innerHTML;
//     // let numBack = exp.substring(0, num.length-1);
//     let back = exp.substring(0, num.length-1);
//     // let result = strBoard.length (length -1);
//     // let result = eval(strBoard);
//     document.getElementById('board').innerHTML = back;
// }

// function backspace() {
//     let numBack = document.getElementById("board").innerHTML;;
//     let num = exp.substring(0, numBack.length-1);
//     // document.getElementById("board").innerHTML = num;
// }

function backspace() {
    let numBack = document.getElementById("board").innerHTML;
    document.getElementById("board").value = numBack.substr(0, numBack.length - 1);
}