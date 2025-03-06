
const namee = ['John', 'Doe', 'Smith', 'Alex'];
console.log(namee);
console.log(...namee);
const namea = [...namee];
console.log(namea);
//spread operator
//spread operator is used to spread the elements of an array or object
//only take the values
//spread operator is used to make a copy of an array or object


const newArray = ['sokina','jorina',...namee];
console.log(newArray);

//...namee is the spread operator
//it spreads the elements of the namee array
//and puts them in the newArray array
//so, the newArray array will have the elements of the namee array
//and the newArray array will have the elements of the namee array

