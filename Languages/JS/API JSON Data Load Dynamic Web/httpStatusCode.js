/**
 * Fetches data from the provided URL and returns the JSON response.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object>} A promise that resolves to the JSON response.
 * @throws {Error} If the fetch operation fails or the response is not JSON.
 *
 * @example
 * fetchData('https://api.example.com/data')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * @httpStatus 200 - OK
 * @httpStatus 404 - Not Found
 * @httpStatus 500 - Internal Server Error
 */

// 200 OK	Request was successful (normal response for GET requests).
// 201 Created	New resource was created (used in POST requests).
// 204 No Content	Request succeeded, but no content is returned (used in DELETE requests).


// Code	Meaning
// 301 Moved Permanently	Resource has permanently moved (used for URL changes).
// 302 Found	Temporary redirect (used when moving users to another page).
// 304 Not Modified	Cached version is still valid (saves bandwidth).

// 400 Bad Request	Invalid request format.
// 401 Unauthorized	User must log in (wrong or missing authentication).
// 403 Forbidden	User doesn’t have permission.
// 404 Not Found	Requested resource doesn’t exist.
// 405 Method Not Allowed	Wrong HTTP method used (e.g., using GET when POST is required).

//500 Internal Server Error	Generic error when the server crashes.
//502 Bad Gateway	Server received an invalid response from another server.
// 503 Service Unavailable	Server is overloaded or down for maintenance.



// Category	Status Code Range	Meaning
// ✅ 1xx	100 - 199	Informational
// ✅ 2xx	200 - 299	Success
// ⚠️ 3xx	300 - 399	Redirection
// ❌ 4xx	400 - 499	Client Errors (Your request is incorrect)
// 🔥 5xx	500 - 599	Server Errors (Problem with the server)