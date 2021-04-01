// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr .push(57);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("IT");
// console.log(arr);


// const matr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
// ];
// console.log(matr[1][1]);

// let str = "hello";
// str = str.split("");
// console.log(str);
// str = str.join("");
// console.log(str);


// const arr = ["I ", "love ", "js ", "!"];
// console.log(arr.toString());
// console.log(arr.join(""));


// let arr = ["I ", "love ", "js ", "!"];
// // arr.splice(1, 2);
// // console.log(arr);
// let arr1 = arr.slice(0, 2);
// let arr2 = arr.slice(2, 4);
// console.log(arr);
// console.log(arr1);
// console.log(arr2);

// const arr3 = arr1.concat(arr2);
// console.log(arr3);



// let arr = ["hello", "world"];
// let arr1 = arr.join(" ");
// arr1 = arr1.toUpperCase();
// arr = arr1.split(" ");

// // for (let i = 0; i < arr.length; i++) { //for
// //     arr[i] = arr[i].toUpperCase();
// // }
// console.log(arr);



// const arr2 = new Array(2, 4, 5);
// console.log(arr2);



// let arr = [1, 36, 54, 83, 5, 1, 46, 3, 5, 41, 3, 5, 4, 6, 5, 81, 4, 0];
// for (let i = 0; i < arr.length; i++) {
//     let j = arr[i] % 2;
//     if (j == 0) {
//         console.log(arr[i]);
//     }
    
// }
// console.log(arr);



// let arr = [1, 36, 54, 83, 5, 1, 46, 3, 5, 41, 3, 5, 4, 6, 5, 81, 4, 0];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// let arr = [1, 36, 54, 83, 5, 1, 46, -3, 5, 41, 3, 5, 4, 6, 5, 81, 4, 10];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);


let arr = [1, 36, 54, 83, 5, 1, 46, 3, 5, 41, 3, 5, 4, 6, 5, 81, 4, 10];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
}
console.log(min);