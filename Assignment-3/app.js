// Product data
const product = async function () {
    const url ="http://localhost:3000/products"

    try {
        const result = await fetch(url);
        
        // Check if the request was successful
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        
        const data = await result.json();
        console.log(data); 

        // Populate the table with fetched data
        populateTable(data);

    } catch (error) {
        console.error('Error fetching data:', error); 
    }
};

// Function to insert product data into the table
function populateTable(products) {
    const tableBody = document.querySelector("#objectsTable tbody");

    products.forEach(product => {
        const row = document.createElement("tr");
        
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Call the product function to fetch data and populate the table
product();
