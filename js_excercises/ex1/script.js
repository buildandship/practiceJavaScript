class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printUser = function () {
        console.log(`User name is ${this.name} and his age is ${this.age}`);
    }


    compare = function (user) {
        if (this.age >= user.age) {
            console.log(`${this.name} is older than ${user.name}`);
        } else {
            console.log(`${user.name} is older than ${this.name}`);
        }
    }
}
let u1 = new User('Hemant', 33);
let u2 = new User('Praveen', 35);
u1.printUser();
u2.printUser();
u1.compare(u2);
//u2.compare(u1);