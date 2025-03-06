/**
 * Calculates the sum of all arguments passed to the function.
 *
 * @returns {number} The total sum of all arguments.
 *
 * @example
 * console.log(sum(1, 2, 3, 4)); // Output: 10
 * console.log(sum(5, 10, 15));  // Output: 30
 */
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    //argument is a array like object
    //not array 
    //array method cant be use
    
    return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15));  // Output: 30