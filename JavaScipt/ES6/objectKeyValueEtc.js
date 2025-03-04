const  person = {
    name: 'hero alom',
    age: 25,
    friends: ['John', 'Jane'],
    status: 'single',
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
//Object.keys() returns the keys of an object
//Object.values() returns the values of an object
//Object.entries() returns the keys and values of an object
//Object.entries() returns an array of arrays
//each array has two elements
//the first element is the key
//the second element is the value
//Object.entries() is used to iterate over an object


//delete seal freeze


//delete is used to delete a property from an object
//delete is used to delete an element from an array
//delete is used to delete a variable
//delete is used to delete a function
//delete is used to delete a class
//delete is used to delete a method

//seal is used to prevent adding new properties to an object
//seal is used to prevent deleting properties from an object
//seal is used to prevent changing the values of properties of an object
//seal is used to prevent changing the configuration of properties of an object
//seal is used to prevent changing the attributes of properties of an object
//seal is used to prevent changing the descriptors of properties of an object



//
person.status = 'married';
console.log(person);
//person object is not sealed
//so, we can change the values of the properties of the person object

//if seal is used, then we cannot change the values of the properties of the person object

Object.seal(person);
person.alu = 'single';
console.log(person);
//person object is sealed
//so, we cannot change the values of the properties of the person object
//existed properties can be changed
//new properties cannot be added


//freeze is used to prevent adding new properties to an object

Object.freeze(person);
person.alu1 = 'single';
person.status = 'single na';
console.log(person);

//person object is frozen
//so, we cannot add new properties to the person object

//delete 

delete person.status;
console.log(person);
//delete is used to delete a property from an object
//freaze ta bad diye dileo delete kora jabe
//seal dile delete kora jabe na