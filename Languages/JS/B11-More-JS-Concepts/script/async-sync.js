const loadData = async() => {
    try {
        console.log("ami prothom")
        console.log('ami second ')
        

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        
        
        console.log(data)
        const result = 10 + 10;
        console.log(result)
        console.log("ami third")
    }
    catch {
        console.log("error")
    }
}

loadData()





// async function fetchData() {
//     const response = await fetch('');
//     const data = await response.json();
//     console.log(data)
//  }

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(res => res.json())
    // .then(data=>console.log(data))