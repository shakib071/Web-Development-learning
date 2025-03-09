const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// GET request: Fetches a list of posts from the API
fetch(apiUrl)
    .then(response => response.json()) // Parses the JSON response
    .then(data => console.log('GET:', data)) // Logs the data to the console
    .catch(error => console.error('Error:', error)); // Logs any errors

// POST request: Creates a new post
fetch(apiUrl, {
    method: 'POST', // Specifies the request method as POST
    headers: {
        'Content-Type': 'application/json' // Sets the content type to JSON
    },
    body: JSON.stringify({
        title: 'foo', // Title of the new post
        body: 'bar', // Body of the new post
        userId: 1 // User ID of the new post
    })
})
    .then(response => response.json()) // Parses the JSON response
    .then(data => console.log('POST:', data)) // Logs the data to the console
    .catch(error => console.error('Error:', error)); // Logs any errors

// PATCH request: Updates a part of an existing post
fetch(`${apiUrl}/1`, {
    method: 'PATCH', // Specifies the request method as PATCH
    headers: {
        'Content-Type': 'application/json' // Sets the content type to JSON
    },
    body: JSON.stringify({
        title: 'foo updated' // Updates the title of the post
    })
})
    .then(response => response.json()) // Parses the JSON response
    .then(data => console.log('PATCH:', data)) // Logs the data to the console
    .catch(error => console.error('Error:', error)); // Logs any errors

// DELETE request: Deletes an existing post
fetch(`${apiUrl}/1`, {
    method: 'DELETE' // Specifies the request method as DELETE
})
    .then(() => console.log('DELETE: Resource deleted')) // Logs a message to the console
    .catch(error => console.error('Error:', error)); // Logs any errors


// PUT request: Replaces an existing post with new data
fetch(`${apiUrl}/1`, {
    method: 'PUT', // Specifies the request method as PUT
    headers: {
        'Content-Type': 'application/json' // Sets the content type to JSON
    },
    body: JSON.stringify({
        id: 1, // ID of the post to be updated
        title: 'foo updated', // New title of the post
        body: 'bar updated', // New body of the post
        userId: 1 // User ID of the post
    })
})
    .then(response => response.json()) // Parses the JSON response
    .then(data => console.log('PUT:', data)) // Logs the data to the console
    .catch(error => console.error('Error:', error)); // Logs any errors


//PUT create new or replace if the resource exists
//Patch update an existing resourse
