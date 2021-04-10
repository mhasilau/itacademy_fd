// let x = '2025-12-31';

// function dateIn(dateOut) {
//     let y = dateOut.split('-').reverse().join('.');
//     console.log(y);
    
// }
// console.log(x);
// dateIn(x);





// let x = 'var_test_text_hello_world';

// function someString(strUp) {
//     let y = strUp.split('_');
//     let arr = [ y[0] ];
//         for (let i = 1; i < y.length; i++) {
//             let a = [];
//             a = y[i].split('');
//             a[0] = a[0].toUpperCase();
//             a = a.join('');
//             arr.push(a);
//         }
//     console.log(arr.join(''));

// }
// someString(x);





// let x = 'var_test_text_hello_world';

// function someString(strUp) {
//     let y = strUp.split('_');
//     let arr = [ y[0] ];
//         for (let i = 1; i < y.length; i++) {
//             let a = [];
//             a = y[i].split('');
//             a[0] = a[0].toUpperCase();
//             a[a.length-1] = a[a.length-1].toUpperCase();
//             a = a.join('');
//             arr.push(a);
//         }
//     console.log(arr.join(''));

// }
// someString(x);


// let count = 0;

// function funk() {
//     console.log('check');
//     funk();
// }
// funk();



// новая тема. объекты





// const user = {
//     name:'mishok',
//     age:30,

//     'bla bla bla': 'hello',
//     sayHello: function () {
//         console.log('Hello world');
//     }
// };

// user.car = 'nissan';
// delete user.car;
// // console.log(user.sayHello);
// // console.log(user['bla bla bla']);
// console.table(user);

// const job1 = {
//     title: 'IT academy',
//     adress: 'Rechitskiy prt'
// };

// user.job = job1;


// const createUser = (userName, useraAge) => {
//     return {
//         name: userName,
//         age: useraAge
//     }
// }

// const createUser = (name, age) => {
//     return {name, age }
// }

// const createUser = (name, age) => ( {name, age } )

// const gasilov = createUser('Mishok', 29);
// console.log(gasilov);

// const anikeev = createUser('Dmitry', 35);
// console.log(anikeev);

// console.log('name' in gasilov);


// for (let property in gasilov) {
//     // console.log(gasilov[property]);
// }
// console.log(Object.keys(gasilov).length);

const users = [
     {
        name:'mishok',
        age:29,
     }, 
     {
        name:'alex',
        age:31,
     }, 
     {
        name:'masha',
        age:17,
     },
     {
        name:'valya',
        age:15,
     },
     {
        name:'petya',
        age:18,
     },
     {
        name:'sasha',
        age:21,
     }
    
];

// let can = [];
// for (let i = 0; i < users.length; i++) {
//     if (users[i].age >= 18) {
//         can.push(users[i].name)
//     }
// }
// console.log(can);



// include
// indexof


const newArr = [];
// for (let i = 0; i < users.length; i++) {
//     // let newArr1 = newArr1.push(users[i]);
// }
// console.log(newArr1);

for (let property in users) {
    console.log(users[property]);
}

