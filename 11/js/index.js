// task 1

const min = prompt ("Enter number from 0 to 59");
console.log(min);
if (min >= 0 && min <=14) {
    console.log("first");
} else if (min >= 15 && min <=29) {
    console.log("second");
} else if (min >= 30 && min <=44) {
    console.log("third");
} else if (min >= 45 && min <=59) {
    console.log("forth");
} else console.log("something wrong");
