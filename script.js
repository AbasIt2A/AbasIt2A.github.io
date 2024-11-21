const apiKey = 'd56203e5-e393-4242-b7f2-1d8914fd2f64';  // Replace with your actual API key if required
const baseUrl = 'https://www.balldontlie.io/api/v1/players';

async function fetchPlayerData() {
  try {
    // Make the API request
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`  // If the API requires authentication using a bearer token
      }
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Parse the JSON response
    const data = await response.json();
    
    // Log the player data or handle it accordingly
    console.log(data);
    
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
}

// Call the function to fetch data
fetchPlayerData();