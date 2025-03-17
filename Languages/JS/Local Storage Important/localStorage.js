//local storage ... its gamechanging man

const age =20 ;
//localstorage handle data in string form
//unique key -> value



localStorage.setItem('age',age);
//eta browser a save thake 
//jate bar bar use kora jay
//jemon ekbar login korle 2nd bar dhukle ar
//login korte hoy na
//refresh reload korleoo thake



const value  = localStorage.getItem('age');

console.log(value);


const addLocalStorage = () => {
    const name = "shakib";
    localStorage.setItem('name',name);
} 


//local storage for object 

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

localStorage.setItem('user', JSON.stringify(user));
//string a convert kore rakhci
//string representation


const retrievedUser = JSON.parse(localStorage.getItem('user'));
//after retriving convert to object
//because we cant access key in object
console.log(retrievedUser);



