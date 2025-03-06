const array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
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