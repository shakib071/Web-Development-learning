// Null vs Undefined in JavaScript

// Example of undefined
let a;
console.log(a); // Output: undefined
// Explanation: 'a' is declared but not assigned any value, so it is undefined.

// Example of null
let b = null;
console.log(b); // Output: null
// Explanation: 'b' is explicitly assigned the value null, which means it is intentionally empty.

// Checking the type of undefined and null
console.log(typeof a); // Output: 'undefined'
console.log(typeof b); // Output: 'object'
// Explanation: The type of undefined is 'undefined', while the type of null is 'object'.
// This is a quirk in JavaScript, where null is considered an object.

// Comparing undefined and null
console.log(a == b); // Output: true
console.log(a === b); // Output: false
// Explanation: When using '==' (loose equality), undefined and null are considered equal.
// However, when using '===' (strict equality), they are not equal because they are of different types.

