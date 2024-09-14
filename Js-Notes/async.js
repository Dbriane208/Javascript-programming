/* Call back functions and setTimeout*/

// simulating getting data from the server
function fetchDataFromServer(callback) {
    console.log('Fetching Data from sever...')

    setTimeout(()=> {
        const data = {
            id: 1,
            name: 'Mark Zuck',
            email: 'zuck@facebook.com'
        };

        console.log('Data fetched form server!');
        // calling the callback function
        callback(data);
    },3000);
}

function processFetchedData(data) {
    console.log('Processing the fetched data...');
    console.log(`User ID: ${data.id}`);
    console.log(`User Name: ${data.name}`);
    console.log(`User Email: ${data.email}`);
}

fetchDataFromServer(processFetchedData);


/* Factorial*/
function calculateFactorial(num) {
    if(num <= 1) return 1

    return num * calculateFactorial(num - 1)
}

console.log(calculateFactorial(-3));

/* Using Promises and Chaining in Javascript */ 

// Fetch user data from an API and process it
fetch('https://jsonplaceholder.typicode.com/users/4')
  .then((response) => {
    // First step: Parse response as JSON
    return response.json(); // Returns a Promise
  })
  .then((data) => {
    // Second step: Use the fetched data
    console.log('User Info:', data);
    
    // Now let's fetch the user's posts
    return fetch(`https://jsonplaceholder.typicode.com/users/${data.id}/posts`);
  })
  .then((response) => {
    // Third step: Parse response as JSON
    return response.json();
  })
  .then((posts) => {
    // Fourth step: Log user's posts
    console.log('User Posts:', posts);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch operations
    console.error('Error fetching data:', error);
  });

/*  Javascript Async/await in Javascript*/ 

async function fetUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

        if(!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json();

        console.log("User Data:", data);
    } catch(error) {
        console.error("Error fething user data:",error.message);
    }
}  

fetUserData(5);

/*Example demonstrating the usage of classes in JS */ 

class HttpClient {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async get(endpoint) {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      return response.json();
    }
  
    async post(endpoint, data) {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    }
  }
  
  const apiClient = new HttpClient('https://jsonplaceholder.typicode.com');
  apiClient.get('/users').then(users => console.log(users));
  