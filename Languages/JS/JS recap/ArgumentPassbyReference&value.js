//primative a pass by value and non primative variable a 
//pass by reference 

// Pass by Value
function changePrimitive(primitive) {
    primitive = 100;
    console.log("Inside function: ", primitive);
}

let num = 50;
console.log("Before function call: ", num);
changePrimitive(num);
console.log("After function call: ", num);

// Pass by Reference
function changeObject(obj) {
    obj.value = 100;
    console.log("Inside function: ", obj);
}

let myObj = { value: 50 };
console.log("Before function call: ", myObj);
changeObject(myObj);
console.log("After function call: ", myObj);

// Pass by Value example with string
function changeString(str) {
    str = "New String";
    console.log("Inside function: ", str);
}

let myStr = "Original String";
console.log("Before function call: ", myStr);
changeString(myStr);
console.log("After function call: ", myStr);

// Pass by Reference example with array
function changeArray(arr) {
    arr.push(100);
    console.log("Inside function: ", arr);
}

let myArray = [1, 2, 3];
console.log("Before function call: ", myArray);
changeArray(myArray);
console.log("After function call: ", myArray);

//primative a pass by value and non primative variable a 
//pass by reference 

