// let user1 = {
//     name: 'Mike',
//     age: 29,
//     sayHello() {
//         // console.log(user1.name);
//         console.log(this.name);
//     }
// };

// let user2 = {
//     name: 'John',
//     age: 25
// };

// const logName = function() {
//     console.log(this.name);
// }

// user1.job = 'ingener';

// user1.sayName = logName;
// user2.sayName = logName;
// user1.sayName();
// user2.sayName();

// let user2 = user1;
// user1 = null;
// // user1.sayHello();
// user2.sayHello();


// const User = function(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = () => console.log(`My name is ${this.name}`);
// };

// const user1 = new User('Mike', 29);
// const user2 = new User('alex', 45);
// user1.sayHello();

// // console.log(user1);
// // console.log(user2);

// class Human {

//     className = 'Human';

//     sayHuman() {
//         console.log("human!");
//     }



//     constructor(head){
//         this.head = head;
//     }
// }

// class User extends Human{

//     #salary = 10;

//     get salary() {
//         return this.#salary;
//     }

//     set salary(value) {
//         // this.#salary = typeof value === 'number' ? value : null;
//         if (typeof value === 'number') {
//             this.#salary = value;
//         }
//     }

//     constructor(name, age, head){
//         super(head);
//         this.name = name;
//         this.age = age;
//     }
// }

// // class User {
// //     constructor(name, age){
// //         this.name = name;
// //         this.age = age;
// //     }
// // }
// const user1 = new User('Mike', 29, true);
// const user2 = new User('John', 18, false);

// // console.log(user1);
// // user1.sayHuman;
// // console.log(user2);

// // User.sayHuman();

// // console.log(User.className);


// // console.log(user1);
// // console.log(user2);
// // user1.salary = 20;
// // console.log(user1);

// console.log(user1.salary);
// user1.salary = 'dfdfdf';
// console.log(user1.salary);

// class Rect {

//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
    
//     square() {
//         let s = this.width * this.height;
//         return s;
//     }

// }

// const a = new Rect(5, 25);
// console.log(a.square());

// class Human {

//     constructor (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

// }

// const user = new Human('Mikhail', 'Hasilau');
// console.log(user.fullName());



class Human {

    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }


}

class Users extends Human {

    constructor(sex, age, firstName, lastName){
        super(firstName, lastName);
        this.sex = sex;
        this.age = age;
    }

}

const user1 = new Users ('man', 29, 'Mikhail', 'Hasilau');
const user2 = new Users ('woman', 25, 'Julia', 'Petrova');

console.log(user1);
console.log(user2);