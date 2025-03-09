// Async_Await.js

// Function to fetch data from an API
async function fetchData(url) {
    try {
        // Await the response from the fetch call
        let response = await fetch(url);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Await the JSON data from the response
        let data = await response.json();
        
        // Log the data to the console
        console.log(data);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Example usage
const apiURL = 'https://jsonplaceholder.typicode.com/posts';
// fetchData(apiURL);




const handleUser = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error=> console.log("error paici",error));
}

// handleUser();


//await 

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })

// console.log("hello");
// console.log("mabud");

//ekhane fetch pore hoice console agea hoice
//karon fetch korte time lage 
//tai porer line jate agea kaj na kore eijoono await nia kaj 
//kaj kore


// async functions always return a promise.
// await pauses execution until a promise resolves.
// try...catch can be used for error handling.
// Use Promise.all for parallel execution.


const handleUser2 = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}

// handleUser2();

const handleUser3 = async() => {

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    }

    catch{
        console.log("error");
    }
    
}

handleUser3();
