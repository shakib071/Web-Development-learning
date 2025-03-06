// Define the outer function that takes one argument
function outerFunction(outerVariable) {
    // Return an inner function that takes another argument
    return function innerFunction(innerVariable) {
        // Log the outer variable, which is accessible due to closure
        console.log('Outer Variable: ' + outerVariable);
        // Log the inner variable, which is passed to the inner function
        console.log('Inner Variable: ' + innerVariable);
    };
}

// Call the outer function with an argument and store the returned inner function
const newFunction = outerFunction('outside');
// Call the inner function with an argument
newFunction('inside');

// Call the outer function with a different argument and store the returned inner function
const anotherFunction = outerFunction('another outside');
// Call the inner function with a different argument
anotherFunction('another inside');



//

function cnt(){
    let counter =0;
    return function  () {
        counter++;
        console.log(counter);
    }
}
//we can call innter function without calling the outer
//this way counter will not be 0 every time

const result = cnt();
console.log(result);

result();
result();
result();
//only inside call so 1st call 1 2nd call 2 
//3rd call 3


