/**
 * Primitive and Non-Primitive Data Types in JavaScript
 *
 * Primitive Data Types:
 * - Characteristics:
 *   - Immutable: Once a primitive value is created, it cannot be changed.
 *   - Stored directly in the variable.
 *   - Compared by value.
 * - Examples:
 *   - `String`: Represents textual data. Example: "Hello, World!"
 *   - `Number`: Represents numeric data. Example: 42
 *   - `Boolean`: Represents true or false. Example: true
 *   - `Undefined`: Represents a variable that has been declared but not assigned a value. Example: undefined
 *   - `Null`: Represents the intentional absence of any object value. Example: null
 *   - `Symbol`: Represents a unique and immutable value. Example: Symbol('description')
 *   - `BigInt`: Represents integers with arbitrary precision. Example: 9007199254740991n
 *
 * Non-Primitive Data Types:
 * - Characteristics:
 *   - Mutable: The content of non-primitive data types can be changed.
 *   - Stored as a reference to the memory location.
 *   - Compared by reference.
 * - Examples:
 *   - `Object`: Represents a collection of key-value pairs. Example: { name: "Alice", age: 30 }
 *   - `Array`: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
 *   - `Function`: Represents a block of code designed to perform a particular task. Example: function greet() { console.log("Hello!"); }
 *   - `Date`: Represents a date and time. Example: new Date()
 *   - `RegExp`: Represents a regular expression. Example: /ab+c/
 */


//primative
let person = "hello";
let newPerson = person;
console.log(person,newPerson);

person = "bye";
console.log(person,newPerson);

//person change holeoo newperson=person hower por oo change hbe
//because direct value ta copy korche memory na



//Non Primative

let person1 = {
    name : "shakib",
};

let newPerson1 = person1;
console.log(person1,newPerson1);
person1.name = "SRK";
console.log(person1,newPerson1);

//ekhane person1 k change korar por newPerson1 oo change hoiya
// gece 
//ekhane memory address copy hoy







// Example of Primitive Data Types
// let str = "Hello, World!";
// let num = 42;
// let bool = true;
// let undef;
// let nul = null;
// let sym = Symbol('description');
// let bigInt = 9007199254740991n;

// console.log("String:", str);
// console.log("Number:", num);
// console.log("Boolean:", bool);
// console.log("Undefined:", undef);
// console.log("Null:", nul);
// console.log("Symbol:", sym);
// console.log("BigInt:", bigInt);

// // Example of Non-Primitive Data Types
// let obj = { name: "Alice", age: 30 };
// let arr = [1, 2, 3, 4, 5];
// function greet() { console.log("Hello!"); }
// let date = new Date();
// let regExp = /ab+c/;

// console.log("Object:", obj);
// console.log("Array:", arr);
// greet();
// console.log("Date:", date);
// console.log("RegExp:", regExp);



// List of Primitive Data Types
let str = "Hello, World!";
let num = 42;
let bool = true;
let undef;
let nul = null;
let sym = Symbol('description');
let bigInt = 9007199254740991n;

console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", bool);
console.log("Undefined:", undef);
console.log("Null:", nul);
console.log("Symbol:", sym);
console.log("BigInt:", bigInt);

// List of Non-Primitive Data Types
let obj = { name: "Alice", age: 30 };
let arr = [1, 2, 3, 4, 5];
function greet() { console.log("Hello!"); }
let date = new Date();
let regExp = /ab+c/;

console.log("Object:", obj);
console.log("Array:", arr);
greet();
console.log("Date:", date);
console.log("RegExp:", regExp);

//test
let newArr= arr;
console.log(arr,newArr);
arr[0]=10;
console.log(arr,newArr);

