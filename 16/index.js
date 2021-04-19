// const x = 2;
// const y = 5;
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const newArrFirst = getFirst(array, x);
// const newArrLast = getLast(array, x);
// const newArrFromTo = getFromTo(array, x, y);
// const newArrFrom = getFrom(array, x);


// function getFirst(arr, n) {
//     return arr.filter( (item, i) => {
//         return i < n;
//     });
// }
// console.log(newArrFirst);


// function getLast(arr, n) {
//     return arr.filter( (item, i, arr) => {
//         return i > arr.length-1-n;
//     });
// }
// console.log(newArrLast);


// function getFromTo(arr, n, k) {
//     return arr.filter( (item, i, arr) => {
//         return i >= n && i <= k;
//     });
// }
// console.log(newArrFromTo);

// function getFrom(arr, n, k) {
//     return arr.filter( (item, i, arr) => {
//         return i >= n;
//     });
// }
// console.log(newArrFrom);

// const user1 = {
//     firstname: 'mike',
//     secondname: 'kozlov',
//     age: 25,
//     job: {
//         first: 'ingener'
//     }
// };
// const user2 = {
//     firstname: 'alex',
//     secondname: 'petrov',
//     age: 24,
//     job: {
//         first: 'manager'
//     }
// };
// const user3 = {
//     firstname: 'john',
//     secondname: 'sidorov',
//     age: 28,
//     job: {
//         first: 'teacher'
//     }
// };
// const user4 = {
//     firstname: 'sam',
//     secondname: 'ivanov',
//     age: 21,
//     job: {
//         first: 'specialist'
//     }
// };
// const user5 = {
//     firstname: 'julia',
//     secondname: 'pupkina',
//     age: 45,
//     job: {
//         first: 'doctor',
//         second: 'saler'
//     }
// };

// const users = [
//     user1,
//     user2,
//     user3,
//     user4,
//     user5
// ];

// const userNames = users.map( item => item.name);
// console.table(userNames);

// const fullNames = users.map( item => {
//     return {
//         fullname: `${item.firstname} ${item.secondname}`,
//         age: `${item.age}`
//     }
// });
// console.table(fullNames);
    

// const ages = users.reduce( (acc, curr, i) => {
//     return acc + curr.age
// }, 0)/users.length;
// console.log(ages);


// const upper = users.reduce( (acc, curr, i) => {
//     return [...acc, {
//         firstName: curr.firstname.toUpperCase(),
//         lastName: curr.secondname.toUpperCase()
//     }] 
    
// }, []);
// console.table(upper);



// const btn = document.getElementById('btn');
// const removebtn = document.getElementById('removebtn');





// btn.addEventListener('click', () => {
//     console.log('hello');
// });


// btn.addEventListener('click', myfync);

// function myfync() {
//     console.log('hello');
// };



// removebtn.onclick = function(){
//     btn.removeEventListener('click', myfync);
// };
// btn.onclick = myfync;


// console.log(btn);


// x = 0;
// const plusbtn = document.getElementById('plus');
// const minusbtn = document.getElementById('minus');
// let result = document.getElementById('res');
// result.innerHTML = 0;


// plusbtn.onclick = function(){
//     x++;
//     result.innerHTML = x;
// };

// minusbtn.onclick = function(){
//     x--;
//     result.innerHTML = x;
// };


//************ task 1
// arr = [6, 5, 16, 84, 56, 46, 0, 4, -5, 34];

// function compareNumbers(array) {
//     const sortArr = array.sort( (curr, next) => {
//         return curr - next; //не понимаю как раотает "под капотом"
//     });
//     console.log(sortArr);
// }
// compareNumbers(arr);

//************ task 2

// arr = [6, NaN, 16, false, 56, null, true, 0, '', -5, undefined];

// function filterFalse(array) {
//     const filterArr = array.filter( ( item, i, array) => { //пока пишу чтоб лучше понимать
//         return item == false ? null : item;
//     });
//     console.log(filterArr);
// }

// filterFalse(arr);

//************ task 2


function propertyValue(params) {
    
}

propertyValue(array, key);
