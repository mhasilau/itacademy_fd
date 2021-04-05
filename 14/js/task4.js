let arr1 = [];
let arr2 = [];

for (let i = 0; i < 10; i++) {
    arr1[i] = Math.floor(Math.random(arr1[i]) * 100);
    arr2[i] = Math.floor(Math.random(arr2[i]) * 100);  
}
console.log(arr1);
console.log(arr2);


function comparison(var1, var2) {

    if (var1.length == var2.length) {
            if (var1 === var2) {
                console.log("Arays are same")
            } else console.log("Some elevemts are various");
    } else console.log("Arays are different");

    


}

let arr3 = [1, 34, 34, 16, 38, 4];
// comparison(arr1, arr1);
// comparison(arr1, arr2);
comparison(arr1, arr3)
