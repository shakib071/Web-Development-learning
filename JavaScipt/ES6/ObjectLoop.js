const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    job: 'Software Engineer',
    
}

console.log(person['name']);
console.log(person['age']);

for (let key in person) {
    console.log(key, person[key]);
}

//for of loop use kora jabe na

// for(let key of person){
//     console.log(key);
// }

//will not work


//cleaver method for for of loop 

for(let key of Object.entries(person)){
    console.log(key);
}
//Object.entries  ekta array tai for of loop use kora jabe 

//direct object a for of loop chole na


