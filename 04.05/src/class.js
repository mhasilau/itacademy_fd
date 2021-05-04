export class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};

export const logger = str => {
    console.log(str);
}