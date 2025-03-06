// Define a class named 'Person'
class Person {
    // Constructor to initialize the properties of the class
    constructor(name, age) {
        // Private properties (conventionally using underscore)
        this._name = name;
        this._age = age;
    }

    // Getter method for the 'name' property
    getName() {
        return this._name;
    }

    // Setter method for the 'name' property
    setName(name) {
        this._name = name;
    }

    // Getter method for the 'age' property
    getAge() {
        return this._age;
    }

    // Setter method for the 'age' property
    setAge(age) {
        if (age > 0) { // Validate age to be a positive number
            this._age = age;
        } else {
            console.log('Please enter a valid age');
        }
    }
}

// Create an instance of the 'Person' class
const person1 = new Person('John Doe', 30);

// Access and modify the properties using getter and setter methods
console.log(person1.getName()); // Output: John Doe
person1.setName('Jane Doe');
console.log(person1.getName()); // Output: Jane Doe

console.log(person1.getAge()); // Output: 30
person1.setAge(25);
console.log(person1.getAge()); // Output: 25
person1.setAge(-5); // Output: Please enter a valid age

// Attempt to set an invalid age
person1.setAge(-10); // Output: Please enter a valid age

// Create another instance of the 'Person' class
const person2 = new Person('Alice Smith', 28);

// Access and modify the properties of the new instance
console.log(person2.getName()); // Output: Alice Smith
person2.setName('Bob Smith');
console.log(person2.getName()); // Output: Bob Smith

console.log(person2.getAge()); // Output: 28
person2.setAge(35);
console.log(person2.getAge()); // Output: 35




















// Define a class named 'Employee' that extends 'Person'
class Employee extends Person {
    // Constructor to initialize the properties of the class
    constructor(name, age, jobTitle) {
        // Call the parent class constructor
        super(name, age);
        // Private property for job title
        this.#jobTitle = jobTitle;
    }

    // Private property for job title
    #jobTitle;

    // Getter method for the 'jobTitle' property
    getJobTitle() {
        return this.#jobTitle;
    }

    // Setter method for the 'jobTitle' property
    setJobTitle(jobTitle) {
        this.#jobTitle = jobTitle;
    }
}

// Create an instance of the 'Employee' class
const employee1 = new Employee('Charlie Brown', 40, 'Manager');

// Access and modify the properties using getter and setter methods
console.log(employee1.getName()); // Output: Charlie Brown
employee1.setName('Charlie Black');
console.log(employee1.getName()); // Output: Charlie Black

console.log(employee1.getAge()); // Output: 40
employee1.setAge(45);
console.log(employee1.getAge()); // Output: 45

console.log(employee1.getJobTitle()); // Output: Manager
employee1.setJobTitle('Senior Manager');
console.log(employee1.getJobTitle()); 


// Output: Senior Manager


