const x =16543;
function descendingOrder(n){
    let arr = n.toString().split('');
    let arr1 = [];
    console.log(arr);
    for ( let i = 0; i < arr.length; i++) {
        let max = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (max < arr[j]) {
                max = arr[j];
                
            }
            
            arr1.push(max);
        }
        // arr.splice(i, 1);
    }
    console.log(arr1);
}


descendingOrder(x);