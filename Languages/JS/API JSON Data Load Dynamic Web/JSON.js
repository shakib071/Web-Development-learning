//Javascipt Object Notation


//conver object to json

const person = {
    name : "hena",
    age : 10,
    friends : ["hero alom","korim"]
}
//double quatation er moddhe keys gula ney
// value te bolean number er jonno double quote dey na
//string a double quotation

const newPerson = JSON.stringify(person);

console.log(newPerson);
console.log(typeof newPerson); //string

//json string to object 

const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2);
console.log(typeof newPerson2);



















// Sample JSON data
const jsonData = `{
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}`;

// Parse JSON data
// const data = JSON.parse(jsonData);

// // Access data
// console.log(data.name); // Output: John Doe
// console.log(data.age);  // Output: 30
// console.log(data.city); // Output: New York


// Sample JSON data with multiple sets of data
const jsonDataMultiple = `[
    {
        "name": "John Doe",
        "age": 30,
        "city": "New York"
    },
    {
        "name": "Jane Smith",
        "age": 25,
        "city": "Los Angeles"
    },
    {
        "name": "Emily Johnson",
        "age": 35,
        "city": "Chicago"
    }
]`;

// Parse JSON data
// const dataMultiple = JSON.parse(jsonDataMultiple);

// // Access data
// dataMultiple.forEach(person => {
//     console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
// });