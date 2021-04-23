// ************** task 1
// class Worker {

//     constructor (name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }

//     getSalary() {
//         return this.rate*this.days
//         // console.log(this.rate*this.days);
//     }

// }

// const worker1 = new Worker ('Mikhail', 'Hasilau', 40, 22);
// // worker1.getSalary();
// console.log(worker1.getSalary());


// ************** task 2
// class Work {

//     #rate = 40;

//     get rate() {
//         return this.#rate;
//     }

//     constructor (days) {
//         this.days = days;
//     }

//     getSalary() {
//         return this.#rate*this.days
//     }

// }

// class Worker extends Work {

//     constructor (name, surname, days){
//         super(days);
//         this.name = name;
//         this.surname = surname;
//     }
// }

// const worker1 = new Worker ('Mikhail', 'Hasilau', 22);
// // worker1.getSalary();
// console.log(worker1.getSalary());



// ************** task 3
// class WorkHard {

//     #rate = 40;

//     get rate() {
//         return this.#rate;
//     }

//     set rate(value) {
//         if (typeof value === 'number') {
//             this.#rate = value;
//         }

//     }

//     constructor (days) {
//         this.days = days;
//     }

//     getSalary() {
//         return this.#rate*this.days
//     }

// }

// class WorkerHard extends WorkHard {

//     constructor (name, surname, days){
//         super(days);
//         this.name = name;
//         this.surname = surname;
//     }
// }

// const worker1 = new WorkerHard ('Mikhail', 'Hasilau', 22);
// // worker1.getSalary();
// worker1.rate = 50;
// console.log(worker1.getSalary());




// ************** task 4
class Square {

    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    
    square() {
        let s = this.width * this.length;
        return s;
    }

}

class Volume extends Square {
    constructor(length, width, height){
        super(length, width, height)
        this.height = height;
    }

    volume() {
        let v = this.length * this.width * this.height;
        return v;
    }

}


const a = new Square(5, 25);
console.log(a.square());
const b = new Volume(5, 2, 7);
console.log(b.volume());







