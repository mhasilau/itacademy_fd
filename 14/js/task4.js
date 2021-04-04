let arr1 = [];
let arr2 = [];

for (let i = 0; i < 10; i++) {
    arr1[i] = Math.floor(Math.random(arr1[i]) * 100);
    arr2[i] = Math.floor(Math.random(arr2[i]) * 100);  
}
console.log(arr1);
console.log(arr2);


function comparison(var1, var2) {
    if (var1.length == var1.length) {

        for (let i = 0; i < 10; i++) {
            if (var1[i] === var2[i]) {
                
            } else console.log("no");
        }
    }
    


}

comparison(arr1, arr1);
// comparison(arr1, arr2);