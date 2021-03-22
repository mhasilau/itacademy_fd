//task 5

const a = prompt ("Enter a");
console.log(a);
const b = prompt ("Enter b");
console.log(b);

let x = prompt ("Enter x");
let y = prompt ("Enter y");
let r = prompt ("Enter R");
let r2 = Math.pow(r, 2)

console.log(r2);
let z = Math.pow((a - x), 2) + Math.pow((b - y), 2);
console.log(z);

z <= r2 ? console.log(`The point is in the circle`) : console.log(`The point out the circle`);

