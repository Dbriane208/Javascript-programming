let events = []; // will store the items to be filtered.
let cartProducts = []; // will store items in the cart

// Function to display events
const displayContent = function (eventsToDisplay) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    eventsToDisplay.forEach(event => {
        const card = document.createElement("div");
        card.className = "main";
        container.appendChild(card);

        const img = document.createElement('img');
        img.src = event.imageUrl;
        card.appendChild(img);

        const info = document.createElement('div');
        info.className = "info";
        card.appendChild(info);

        const title = document.createElement('h3');
        title.textContent = event.title;
        info.appendChild(title);

        const date = document.createElement('p');
        date.textContent = event.date;
        info.appendChild(date);

        const company = document.createElement('p');
        company.textContent = event.company;
        info.appendChild(company);

        const price = document.createElement('p');
        price.textContent = `Ksh ${event.price}`;
        info.appendChild(price);

        const button = document.createElement('button');
        button.textContent = 'Add to Cart';
        button.className = 'addProduct';
        info.appendChild(button);

        button.addEventListener('click', () => {
            addProductToCart(event); // Call the function to add the product to the cart
        });
    });
};

// Function to add products to the cart
const addProductToCart = function (product) {
    const cartContainer = document.getElementById('cartContainer');

    // Check if the product already exists in the cart
    const existingProductIndex = cartProducts.findIndex(item => item.id === product.id);
    console.log(existingProductIndex);

    if (existingProductIndex !== -1) {
        // Remove the existing product from the cart array
        cartProducts.splice(existingProductIndex, 1);
    }

    // Add the product to the cart array
    cartProducts.push(product);
    console.log(cartProducts);

    // Clear the cart container and re-render items
    cartContainer.innerHTML = '';
    cartProducts.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const img = document.createElement('img');
        img.src = item.imageUrl;
        cartItem.appendChild(img);

        const info = document.createElement('div');
        info.className = "info-cart";
        cartItem.appendChild(info);

        const title = document.createElement('h4');
        title.textContent = item.title;
        info.appendChild(title);

        const date = document.createElement('p');
        date.textContent = item.date;
        info.appendChild(date);

        const company = document.createElement('p');
        company.textContent = item.company;
        info.appendChild(company);

        const price = document.createElement('p');
        price.textContent = `Ksh ${item.price}`;
        info.appendChild(price);

        // Append the new cart item to the cart container
        cartContainer.appendChild(cartItem);
    });
};

// Function to fetch data and initialize the page with async/await
const fetchData = async () => {
    try {
        const res = await fetch("https://run.mocky.io/v3/cc2a23ed-67af-453a-89e7-a48bf18405f3");
        const data = await res.json();
        events = data;
        displayContent(events); // Call the function to display the events initially
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Function to delete products from the cart
const deleteProductFromCart = function (productId) {
    cartProducts = cartProducts.filter(item => item.id !== productId);
    updateCartUI();
};

// Function to update the cart UI
const updateCartUI = function () {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = "";

    cartProducts.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const img = document.createElement('img');
        img.src = product.imageUrl;
        cartItem.appendChild(img);

        const info = document.createElement('div');
        info.className = "info-cart";
        cartItem.appendChild(info);

        const title = document.createElement('h4');
        title.textContent = product.title;
        info.appendChild(title);

        const date = document.createElement('p');
        date.textContent = product.date;
        info.appendChild(date);

        const company = document.createElement('p');
        company.textContent = product.company;
        info.appendChild(company);

        const price = document.createElement('p');
        price.textContent = `Ksh ${product.price}`;
        info.appendChild(price);

        const quantity = document.createElement('p');
        quantity.textContent = `Quantity: ${product.quantity}`;
        info.appendChild(quantity);

        const increaseButton = document.createElement('button');
        increaseButton.textContent = 'Increase';
        increaseButton.addEventListener('click', () => {
            increaseProductQuantity(product.id);
        });
        info.appendChild(increaseButton);

        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = 'Decrease';
        decreaseButton.addEventListener('click', () => {
            reduceProductQuantity(product.id);
        });
        info.appendChild(decreaseButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.addEventListener('click', () => {
            deleteProductFromCart(product.id);
        });
        info.appendChild(deleteButton);
    });
};

// Call the fetchData function when the page loads
fetchData();

// Filter functionality
document.getElementById('priceFilter').addEventListener('change', () => {
    const priceFilter = document.getElementById('priceFilter').value;

    let filteredEvents = events;

    if (priceFilter === 'low') {
        filteredEvents = events.filter(event => event.price <= 50);
    } else if (priceFilter === 'high') {
        filteredEvents = events.filter(event => event.price > 50);
    }

    displayContent(filteredEvents);
});
