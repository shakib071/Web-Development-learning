


function handleLoadData(){
    //single data
    
    // fetch('https://jsonplaceholder.typicode.com/todos/5')
    // .then((res) => res.json())
    // .then((data) => console.log(data))

    // multiple data 

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => console.log(data))
}