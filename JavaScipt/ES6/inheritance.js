// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Derived class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the constructor of the base class
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Create an instance of Dog
const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak(); // Output: Rex barks.



class Vehical{
    constructor(name,price){
        this.name=name;
        this.price=name;

    }

    move(){
        console.log("hello ami accident kori");
    }
}

class Bus extends Vehical{
    constructor(name,price,seat){
        super(name,price);
        this.seat=seat
    }
}

let h1 = new Bus('hello',1000,22);
console.log(h1);