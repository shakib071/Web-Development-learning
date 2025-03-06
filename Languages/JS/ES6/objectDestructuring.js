
const hena = {
    name: 'Hena',
    age: 25,
    friends: ['John', 'Jane'],
    status: 'single',
}

// const henaStatus = hena.status;
// const henaName = hena.name;
// const henaFriends = hena.friends;
// const henaAge = hena.age;
// console.log(henaStatus, henaName, henaFriends, henaAge);

//long process not recommended



//object destructuring
//recommended

const { status, name, friends, age } = hena;
// console.log(status, name, friends, age);



//array destructuring
//recommended

const person= ['hero alom', 'kanu moni', 'Dipjol', 'Misha', 'Moushumi'];

const [nayok, nayika, ...rest] = person;
console.log(nayok, nayika, rest);
//nayok, nayika are the first two elements of the person array
//rest is the rest of the elements of the person array
//rest is an array

const [first, second, third, fourth, fifth] = person;
console.log(first, second, third, fourth, fifth);
//first, second, third, fourth, fifth are the elements of the person array
//first, second, third, fourth, fifth are strings


const [nayokk, alu] = person;
console.log(nayokk, alu);
//nayokk is the first element of the person array
//alu is the second element of the person array