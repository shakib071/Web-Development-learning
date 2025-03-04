//regular function
function add(a, b) {
    return a + b;
}

//arrow function
const add11 = (a, b) => a + b;
//parameter => return value
//brackets are optional if there is only one line of code
//if there is more than one line of code, then we need to use brackets
//parameter brackets are optional if there is only one parameter
//if there are no parameters, then we need to use empty brackets


const add2 = (a, b) => {
    //do something
    //more than one line
    let sum= a+b;
    return sum;
    

}

//if there are no parameters
const greet = () => {
    console.log('Hello');
}

//if there is only one parameter
const greet1 = name => {
    console.log(`Hello ${name}`);
}

//if there are more than one parameter
const greet2 = (name, age) => {
    console.log(`Hello ${name} ${age}`);
}
greet2('John', 25);

//event listener with regular function
document.querySelector('button').addEventListener('click', function() {
    console.log('Button clicked');
});

//event listener with arrow function

document.querySelector('button').addEventListener('click', () => {
    console.log('Button clicked');
});