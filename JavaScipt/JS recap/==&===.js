// // == vs ===

// // Using ==
// console.log(5 == '5'); // true, because == performs type coercion
// console.log(0 == false); // true, because == performs type coercion
// console.log(null == undefined); // true, because == considers them equal

// // Using ===
// console.log(5 === '5'); // false, because === does not perform type coercion
// console.log(0 === false); // false, because === does not perform type coercion
// console.log(null === undefined); // false, because === does not perform type coercion

// // Additional examples
// console.log('' == false); // true, because == performs type coercion
// console.log('' === false); // false, because === does not perform type coercion
// console.log([] == false); // true, because == performs type coercion
// // console.log([] === false); // false, because === does not perform type coercion


// console.log([]===false);

console.log([]==[]);
//false because it compare address not value

console.log(5*"2"===10);
//true because it converst to int 
