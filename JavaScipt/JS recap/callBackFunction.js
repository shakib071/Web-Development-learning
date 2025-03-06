// A function that takes another function as an argument
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

// A callback function
function sayGoodbye() {
    console.log('Goodbye!');
}

// Calling the greet function and passing the sayGoodbye function as a callback
greet('Alice', sayGoodbye);

// Output:
// Hello Alice
// Goodbye!

function ghotok(patri,name){
    patri(name);
}

const patri =  function (name) {
    console.log("my name is ", name);
}

ghotok(patri,'hello');