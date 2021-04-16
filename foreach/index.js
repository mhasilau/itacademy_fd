const arr = [1, 9, 4, 0, 3, 5, 6, 2, 8, 7];
const newArr = [];
arr.forEach( item => {
    newArr.push(Math.pow(item, 2));
});
console.log(newArr);

let sum = 0;
arr.forEach(item => {
    sum += item;
});
console.log(sum);
