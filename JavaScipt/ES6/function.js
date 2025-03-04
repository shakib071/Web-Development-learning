function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

function subtract(a=10, b=5) { //default parameter value
  return a - b;
}

console.log(subtract(20, 10));
console.log(subtract());