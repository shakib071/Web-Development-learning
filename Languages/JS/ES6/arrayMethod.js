const array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
    console.log(element);
});

array.forEach(element => {
    console.log(element);
});

const object = { a: 1, b: 2, c: 3 };

Object.keys(object).forEach(function(key) {
    console.log(key, object[key]);
});

array.forEach(element => {
    console.log(element);
});

Object.keys(object).forEach(key => {
    console.log(key, object[key]);
});



//filter 


const filteredArray = array.filter(element => element > 2);
console.log(filteredArray);

const filteredObjectKeys = Object.keys(object).filter(key => object[key] > 1);
filteredObjectKeys.forEach(key => {
    console.log(key, object[key]);
});

// Filter array to get elements less than or equal to 3
const filteredArray2 = array.filter(element => element <= 3);
console.log(filteredArray2);

// Filter object keys to get keys with values less than 3
const filteredObjectKeys2 = Object.keys(object).filter(key => object[key] < 3);
filteredObjectKeys2.forEach(key => {
    console.log(key, object[key]);
});


//find 


// Find the first element in the array that is greater than 3
const foundElement = array.find(element => element > 3);
console.log(foundElement);

// Find the first key in the object with a value greater than 2
const foundKey = Object.keys(object).find(key => object[key] > 2);
console.log(foundKey, object[foundKey]);


// map

// Map array to get squares of each element
const mappedArray = array.map(element => element * element);
console.log(mappedArray);

// Map object values to get their squares
const mappedObject = Object.keys(object).map(key => object[key] * object[key]);
console.log(mappedObject);

// reduce

// Reduce array to get the sum of all elements
const reducedArray = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reducedArray);

// Reduce object values to get the sum of all values
const reducedObject = Object.keys(object).reduce((accumulator, key) => accumulator + object[key], 0);
console.log(reducedObject);

// some

// Check if some elements in the array are greater than 3
const someArray = array.some(element => element > 3);
console.log(someArray);

// Check if some values in the object are greater than 2
const someObject = Object.keys(object).some(key => object[key] > 2);
console.log(someObject);

// every

// Check if every element in the array is greater than 0
const everyArray = array.every(element => element > 0);
console.log(everyArray);

// Check if every value in the object is greater than 0
const everyObject = Object.keys(object).every(key => object[key] > 0);
console.log(everyObject);

