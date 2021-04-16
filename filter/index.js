const arr = [4, 6, 5, -6, 1, 6, -4, 0, 4 ,-5, 0];
const newArr6 = arr.filter( item => {
  return item < 0;
});
console.log(newArr6);

const newArr7 = arr.filter( item  => {
  return !(item % 2);
});
console.log(newArr7);



const strArr = ['fasdd', 'asdg', 'sdjkh', 'asuig', 'asdgf', 'klsdugh', 'alsg', 'aslsf'];
const newArr8 = strArr.filter( item => {
  return item.length > 5;
});
console.log(newArr8)

const strArr9 = [1, 2, [3, 4], 5, [6, 7]];
const newArr9 = strArr9.filter( item => {
  return !(Array.isArray(item));
});
console.log(newArr9)