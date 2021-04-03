//sort
// const arr = [12, 3, 5, 14, 38, 616, 8, 4, 31];
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             const temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
        
//     }

// }
// console.log(arr);


//revesre
// const arr = [12, 3, 5, 14, 38, 16, 8, 4, 31];
// let arr1 = [];
// console.log(arr);
// // arr.reverse();
// // console.log(arr);

// for (let i = arr.length-1; i >= 0; i--) {
//     arr1.push(arr[i]); 
// }
// console.log(arr1);


//cat all=false
let arr = [0, 0, 0, undefined, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 12, null, 0, 5, "hello", 38, false, undefined, null, false, null, "world", "", 46, undefined, 29, undefined,  null, undefined];
console.log(arr);
let newArr = [];
// for (let i = 0; i < arr.length; i++) {
    // if (!arr[i]) {
    //     arr.splice(i, 1);
    // }
    // if (!arr[i+1]) {
    //     arr.splice(i+1, 1);
    // }
    // if (!arr[i-1]) {
    //     arr.splice(i-1, 1);
    // }
    // if (!arr[i]) {
    //     arr[i] = 0;
    // }

    

    
    
// }
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        newArr.push(arr[i])
    }      
}

console.log(newArr);

// arr = arr.filter(item => {
    //     if (item) {
    //         return item;
    //     }
    // })

// console.log(arr);









