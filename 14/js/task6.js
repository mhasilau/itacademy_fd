let arr1 = [];
let arr2 = [];
NumOfRepeat = 8;

for (let i = 0; i < NumOfRepeat; i++) {
    if (i % 2 == 0) {
        arr1[i] = "#";
        arr2[i] = " ";
    } else if (i % 2 != 0) {
        arr1[i] = " "; 
        arr2[i] = "#";
    }
}
let str1 = arr1.join(" ");
let str2 = arr2.join(" ");

console.log(str1);
console.log(str2);

for (let i = 0; i < NumOfRepeat/2; i++) {
    console.log(str1);
    console.log(str2);    
}
