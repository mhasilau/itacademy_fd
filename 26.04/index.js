// console.log('start');

// setTimeout( () => console.log('time'), 3000); //3000ms
// console.log('end');


// setInterval(() => {
//     console.log('interval');
// }, 1000);

// const myInterval = setInterval(() => {
//     console.log('interval');
// }, 1000);
// console.log(myInterval);

// setTimeout(() => {
//     console.log('finish');
//     clearInterval(myInterval);
// }, 3000);



// const fromTo = (from, to) => {
//     let i = from;
//     const interval = setInterval(() => {
//         console.log(i);
//         i++;

//     if (i === to + 1 ) {
//         clearInterval(interval);
//     }

//     }, 1000);

// }

// fromTo(2, 8);



// console.log('begin');

// setTimeout ( () => {
//     console.log('start loading');
//     setTimeout ( () => {
//         console.log('data recieved');
//         setTimeout(() => {
//             console.log('complite');
//         }, 1500);
//     }, 1500)
// }, 1500);



// class TestClass {
//     constructor(func) {
//         this.func = func;
//     }
// }

// const testClass = new TestClass( () => console.log('test'));
// testClass.func();




// const startpromise = () => new Promise ( (resolve, reject) => {
//     setTimeout(() => {
//         console.log('start promise');
//         resolve();
//     }, 2000);
// });

// const middlepromise = () => new Promise ( (resolve, reject) => {
//     setTimeout(() => {
//         console.log('middle promise');
//         resolve();
//     }, 3000);
// });

// const endpromise = () => new Promise ( (resolve, reject) => {
//     setTimeout(() => {
//         console.log('end promise');
//         resolve();
//     }, 1000);
// });

// startpromise()
//     .then ( () => middlepromise())
//     .then ( () => console.log('lol'))
//     .then ( () => endpromise());

// Promise.all([startpromise(), middlepromise(), endpromise()])
    // then ( () => console.log('after all'));
// Promise.race([startpromise(), middlepromise(), endpromise()]);
    // then ( () => console.log('after first'));

// const URL = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(URL)
// .then(response => response.json())
// .then(json => console.log(json))

// const delay = ms => new Promise (resolve => setTimeout( () => resolve(), ms));

// const getTODO = () => {
//     delay(3000)
//         .then( () => fetch(URL))
//         .then(response => response.json())
//         .then(json => console.log(json));
// }

// getTODO();



const URL = 'https://jsonplaceholder.typicode.com/todos/1';
const delay = ms => new Promise (resolve => setTimeout( () => resolve(), ms));

const fetchTODO = () => fetch(URL)
.then(response => response.json())
.then(json => console.log(json))



const getTODO = async () => {
    await delay(3000);
    await fetchTODO(3000);
};

getTODO();


