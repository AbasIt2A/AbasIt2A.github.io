// Function to fetch random cat data using The Cat API
async function fetchCatData() {
  const catContainer = document.getElementById('cat-container');
  try {
      // Fetch random cat data from The Cat API
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      const cat = data[0];

      // Display the random cat image and details
      const catInfo = `
          <h2>Meet Your Random Cat!</h2>
          <img src="${cat.url}" alt="Random Cat Image" width="300">
          
      `;

      catContainer.innerHTML = catInfo;
  } catch (error) {
      console.error('Error fetching cat data:', error);
      catContainer.innerHTML = '<p>Sorry, there was an error fetching the cat data.</p>';
  }
}
