
// const x = 5;
// const y = 4;

// const a = 8;
// const b  = 16;

// function  sum(var1, var2) {
//     console.log(var1 + var2);
//     getUpCaseStr("hello");
//     getUpCaseStr("world");
// }

// // sum(7, 3);
// // sum(75, 42);
// // sum(x, y);
// // sum(a, b);

// function getUpCaseStr(str) {
//     console.log(str.toUpperCase());
// }

// sum(95, 96);

// const result = sum(95, 96);
// const result2 = sum(8, 48);

// function  sum(var1, var2) {
//     return var1 + var2;
//     // result = var1 + var2;
// }
// // sum(95, 96);
// console.log(result);
// console.log(result2);


// const logger = function () {
//     console.log("hello");
// }

// logger();

// const logger = (str, str2) => console.log(`hello ${str} ${str2}`);
// logger("world", "!!");

// function ask(question, yes, no) {
//     confirm(question) ? yes() : no();
// }

// function positiveAnswer() {
//     console.log("yes");
// }

// function negativeAnswer() {
//     console.log("no");
// }

// const quest = "yes or no?";

// ask(quest, positiveAnswer, negativeAnswer);

const inpValue = document.getElementById("inp");
const result = document.getElementById("result");

function check() {
    console.log(inpValue.value);
    result.innerHTML = inpValue.value;
}
