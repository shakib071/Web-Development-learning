// Type Conversion
let numString = "123";
let num = Number(numString); // Converts string to number
console.log(num); // 123
console.log(typeof num); // number

let boolString = "true";
let bool = Boolean(boolString); // Converts string to boolean
console.log(bool); // true
console.log(typeof bool); // boolean

let numToString = String(num); // Converts number to string
console.log(numToString); // "123"
console.log(typeof numToString); // string

// Type Coercion
let result1 = '5' + 2; // '52' (number 2 is coerced to string)
console.log(result1); // "52"

let result2 = '5' - 2; // 3 (string '5' is coerced to number)
console.log(result2); // 3

let result3 = '5' * 2; // 10 (string '5' is coerced to number)
console.log(result3); // 10

let result4 = '5' / 2; // 2.5 (string '5' is coerced to number)
console.log(result4); // 2.5

let result5 = '5' == 5; // true (string '5' is coerced to number)
console.log(result5); // true

let result6 = '5' === 5; // false (strict equality, no coercion)
console.log(result6); // false



