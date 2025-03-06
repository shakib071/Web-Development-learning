// Global scope
var globalVar = "I am a global variable";

function checkScope() {
    // Block scope
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Output: I am a block-scoped variable
    console.log(globalVar); // Output: I am a global variable
}

checkScope();

console.log(globalVar); // Output: I am a global variable
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

