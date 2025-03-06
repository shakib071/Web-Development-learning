class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() { //method
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('John Doe', 30); //object
person1.greet(); // Output: Hello, my name is John Doe and I am 30 years old.


class product { //without constractor 
    age=1;
    roll=5;
}

let h1=  new product();
console.log(h1);
h1.age=10;
h1.roll=231;
console.log(h1);