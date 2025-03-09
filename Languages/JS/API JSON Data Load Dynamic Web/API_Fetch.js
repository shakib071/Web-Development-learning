// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then(response => response.json()) // Parse the JSON from the response
    .then(json => console.log(json)) // Log the JSON data to the console

// fetch dia api call kori 

fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then((res) => res.json())
    .then((json) => console.log(json))


    
fetch('https://jsonplaceholder.typicode.com/todos/5')
.then((res) => res.json())
.then((data) => console.log(data))

// Step-by-Step Execution
// 1️⃣ fetch() → Sends a Request to the API
// fetch('https://jsonplaceholder.typicode.com/todos/5') sends a GET request to the API.
// The API URL (https://jsonplaceholder.typicode.com/todos/5) is from JSONPlaceholder, a free fake API.
// The endpoint /todos/5 means it is fetching TODO item #5.

// 2️⃣ .then((res) => res.json()) → Parses the Response
// The fetch() function returns a Promise, which resolves to a Response object (res).
// .json() is called on res to convert the response body into a JavaScript object.
// Since .json() is also asynchronous, it returns another Promise.

// 3️⃣ .then((data) => console.log(data)) → Logs the JSON Data
// Once the JSON data is fully loaded, the next .then() executes.
// data now contains the parsed JSON object.
// console.log(data) prints the fetched data.
