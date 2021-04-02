//task 1

let arr1 = [];
let arr2 = [];


for (let i = 0; i < 10; i++) {
    arr1[i] = Math.floor(Math.random(arr1[i]) * 100);
}

for (let i = 0; i < 10; i++) {
    arr2[i] = Math.floor(Math.random(arr2[i]) * 100);
}

console.log(arr1);
console.log(arr2);

//task 2

function clue() {
    let arr3 = arr1.concat(arr2);
    let enterNumberEl = prompt("Enter the number of elements");
    num = Number(enterNumberEl);
    for (let i = 0; i < num; i++) {
        let enterNumber = prompt("Enter the number");
        numToArray = Number(enterNumber);
        arr3.push(numToArray)
    }
    
    for (let i = 0; i < arr3.length; i++) {
        let j = arr3[i] % 2;
        if (j == 0) {
            arr3[i] *= 2
        }
        
    }

    let max = arr3[0];
    for (let i = 0; i < arr3.length; i++) {
        if (max < arr3[i]) {
            max = arr3[i];
        }
        
    }

    let min = arr3[0];
    for (let i = 0; i < arr3.length; i++) {
        if (min > arr3[i]) {
            min = arr3[i];
        }

    }

    // console.log(arr3);
    console.log(`Result Array is ${arr3}`);
    console.log(`Biggest element is ${max}`);
    console.log(`Smaller element is ${min}`);
}

clue();
