// const user1 = {
//     name: 'mike',
//     age:20,
//     job:'dev'
// };


// const user2 = {
//     name: 'al',
//     age:21
// };

// const user3 = {
//     name: 'john',
//     age:25
// };

// const users = [
//     user1,
//     user2,
//     user3
// ];


// console.table(Object.values(user1));
// console.table(...users);
// console.table(user1.hasOwnProperty('name'));
// console.table(Object.entries(user1));
// const newArr = [];
// newArr.push(Object.keys(user1));
// newArr.push(Object.values(user1));
// console.log(newArr);

// const arr = [3, 3, 4, 5, 1, 3, 5, 4, 1, 2, 3];

// console.log(arr.indexOf(1));
// console.log(arr.includes(1));

// arr.forEach( (item, i, inputArr) => {
    //     console.log(inputArr);
    // });
    
    
// const user1 = {
//     name: 'mike',
//     age:20,
//     job:'dev'
// };


// const user2 = {
//     name: 'al',
//     age:21
// };

// const user3 = {
//     name: 'john',
//     age:25
// };

// const users = [
//     user1,
//     user2,
//     user3
// ];
        
// console.log(users.find( (item, i, arr) => {
//     return item.age === 21;
// } ));

// console.log(users.findIndex( (item, i, arr) => {
//     return item.age === 21;
// } ));

// console.log(users.filter ( ( item, i, arr) => {
//     return item.age > 20;
// }));

// const arr = [3, 3, 4, 5, 1, 3, 5, 4, 1, 2, 3];

// const updArr = arr.map((item, i, arr) => {
//     return item*item;
// });
// console.log(updArr);

// const user1 = {
//     name: 'mike',
//     age:20,
//     job:'dev'
// };


// const user2 = {
//     name: 'al',
//     age:21
// };

// const user3 = {
//     name: 'john',
//     age:25
// };

// const users = [
//     user1,
//     user2,
//     user3
// ];

// const sortUsers = users.sort( (prev, curr) => {
//     return prev.name > curr.name ? 1 :
//         prev.name === curr.name ? 0 :
//             prev.name < curr.name ? -1 : null;
// });
// console.table(sortUsers);





// const updUsers = users.map(item => item.name.toLocaleUpperCase());
// console.log(updUsers);

// const arr = [3, 3, 4, 5, 1, 3, 5, 4, 1, 2, 6];

// console.log(arr.sort( (prev, curr) => {
//     return prev > curr ? 1 :
//         prev === curr ? 0 :
//             prev < curr ? -1 : null;
// }));

// const sum = arr.reduce( (prev, item, i, arr) => {
//     return prev + item;
// }, 0 );

// console.log(sum);

// const updArr = arr.reduce( (prev, item) => {
//     return [...prev, item*item]
// }, [] );
// console.log(updArr);

// const updUsers = users.reduce( (prev, item) => {
//     return [...prev, item.name.toLocaleUpperCase()];
// }, []);
// console.log(updUsers);

// const str = '2025-12-31';
// let strArr = str.split('-')
// .reduce( (prev, curr, i, str) => {
//     return [...prev, str[str.length - 1 - i]]
// }, [])
// .join('.');
// console.log(strArr);

const srt = 'var_test_text';
let newArr = srt.split('_')
    .map ( (item, i, srt) => 
        i > 0 ? item.split('')[0].toUpperCase() + item.slice(1) : item)
    .join('');
console.log(newArr);

// const arr = [3, 3, 4, 5, 1, 3, 5, 4, 1, 2, 6];
// arr.forEach(element => {
//     console.log(element*element);
// });