// const x = "hello";
// const y = "IT";
// const z = "academy";

// const str = `${x} ${y} ${z}`;
// console.log(str);


// const x = 2;
// const y = 4;
// const res = x + y;
// let z = 5;

// console.log(++z);
// console.log(res);

// let x = true;
// let y = false;

// let res = x && y; //and

// console.log(res);

// let x = true;
// let y = false;
// let a = 2;
// let b = "2";

// if (a > 5) {
//     console.log("more");
// } else {
//     console.log("less");
// }



// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// let x = true;
// let y = false;
// let a = 2;
// let b = "2";


// //условие ? ответ1 : ответ2
// a > 0 ? console.log("more") : console.log("less");



// alert ("hello world");
// const indata = prompt ("olololo");
// console.log(indata);



// let x = 8;
// // while (x < 10) {
// //     console.log(x);
// //     x++;
// // }

// //  do {
// //     console.log(x);
// //     x++;
// //  } while (x < 10);

// for (let i = 0; i < x; i++) {
//     console.log(i);
// }

const username = prompt ("Enter your name");
// console.log(username);
let userage = prompt ("Enter your year of birth");
// console.log(userage);
userage = 2021 - userage;
const usersex = confirm ("Are you man?");

if (!isNaN(userage)) {
    if (username != null) {
        if (usersex === true) {
            console.log(`Username is ${username}, he is ${userage}`);
        } else if (usersex === false) {
            console.log(`Username is ${username}, she is ${userage}`);
        } 
    } else console.log(`Incorrect age`);
} else console.log(`Incorrect age`);


// if (usersex === true) {
//     console.log(`Username is ${username}, he is ${userage}`);
// } else if (usersex === false) {
//     console.log(`Username is ${username}, she is ${userage}`);
// } else if (userage != NaN) {
//     console.log(`Incorrect age`);
// }


// usersex ? 
//     console.log(`Username is ${username}, he is ${userage}`) : 
//     console.log(`Username is ${username}, she is ${userage}`);