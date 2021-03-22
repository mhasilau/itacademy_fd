// task 1

// const min = prompt ("Enter number from 0 to 59");
// console.log(min);
// if (min >= 0 && min <=14) {
//     console.log("first");
// } else if (min >= 15 && min <=29) {
//     console.log("second");
// } else if (min >= 30 && min <=44) {
//     console.log("third");
// } else if (min >= 45 && min <=59) {
//     console.log("forth");
// } else console.log("something wrong");


// task 2a

// const num = prompt ("Enter number from 1 to 4");
// console.log(num);
// if (num == 1) {
//     console.log("winter");
// } else if (num == 2) {
//     console.log("spring");
// } else if (num == 3) {
//     console.log("summer");
// } else if (num == 4) {
//     console.log("aгthumn");
// } else console.log("something wrong");

//task 2b

// const num = prompt ("Enter number from 1 to 4");
// console.log(num);
// switch (num) {
//     case 1:
//         console.log("winter");
//         break;
//     case 2:
//         console.log("spring");
//         break;
//     case 3:
//         console.log("summer");
//         break;
//     case 4:
//         console.log("aгthumn");
//         break;
//     default:
//         console.log("something wrong");
//         break;
// }


//task 3

// let x = 0;
// for ( let i = 1; i <= 100; i++) {
//     x += i;
// }
// console.log(x);


// task 4

const num1 = prompt ("Enter first number");
console.log(num1);
const num2 = prompt ("Enter second number");
console.log(num2);
const num3 = prompt ("Enter third number");
console.log(num3);

// const num1 = 41;
// const num2 = 36;
// const num3 = 25;

let num1a = num1 > num2;
let num1b = num1 > num3;
let num2a = num2 > num1;
let num2b = num2 > num3;
let num3a = num3 > num1;
let num3b = num3 > num2;

console.log(num1a);
console.log(num1b);
console.log(num2a);
console.log(num2b);
console.log(num3a);
console.log(num3b);

if ( num1 > num2 && num1 > num3 ) {
    console.log(num1);
} else if ( num2 > num1 && num2 > num3 ) {
    console.log(num2);
} else if ( num3 > num1 && num3 > num2 ) {
    console.log(num3);
} else console.log("something wrong");