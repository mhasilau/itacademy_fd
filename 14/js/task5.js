let arr = [];

for (let i = 0; i < 100; i++) {
    arr[i] = i+1;    
    
    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
        arr[i] = "FizzBuzz";
    }
    if (arr[i] % 3 == 0) {
        arr[i] = "Fizz";
    }
    if (arr[i] % 5 == 0) {
        arr[i] = "Buzz";
    }
}

console.log(arr);

