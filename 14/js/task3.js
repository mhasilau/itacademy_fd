let str = "Some string with any text";
let arr = str.split(" ");
let arr1 = [];
console.log(arr);
for (let i = arr.length-1; i >= 0; i--) {
    arr1.push(arr[i]); 
}
console.log(arr1);