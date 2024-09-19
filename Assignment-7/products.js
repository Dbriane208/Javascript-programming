let events = [];

async function fetchData() {
  try {
    const res = await fetch("http://localhost:3000/data");
    const data = await res.json();

    const container = document.getElementById("container");

    data.forEach(event => {
      const card = document.createElement("div");
      card.className = "main";
      container.appendChild(card);

      // Create the image element
      const img = document.createElement('img');
      img.src = event.imageUrl;
      card.appendChild(img);

      const info = document.createElement('div');
      info.className = "info";
      card.appendChild(info);

      // Create the title element
      const title = document.createElement('h3');
      title.textContent = event.title;
      info.appendChild(title);

      // Create the date element
      const date = document.createElement('p');
      date.textContent = event.date;
      info.appendChild(date);

      // Create the company and price element
      const company = document.createElement('p');
      company.textContent = event.company;
      info.appendChild(company);

      const price = document.createElement('p');
      price.textContent = (`Ksh ${event.price}`);
      info.appendChild(price);

      // Create the button
      const button = document.createElement('button');
      button.textContent = 'Buy Now';
      info.appendChild(button);
    });

    // Store events for filtering
    events = data;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function to load data when the page loads
fetchData();