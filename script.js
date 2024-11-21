const baseUrl = 'https://cors-anywhere.herokuapp.com/https://www.balldontlie.io/api/v1/players';

// Fetch and display a random NBA player
async function fetchPlayerData() {
  try {
    // Fetch data from the API
    const response = await fetch(baseUrl);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Randomly select a player
    const players = data.data;
    if (!players || players.length === 0) {
      throw new Error('No players found in the API response.');
    }

    const randomPlayer = players[Math.floor(Math.random() * players.length)];

    // Display the player's information
    const playerContainer = document.getElementById('NBA-container');
    playerContainer.innerHTML = `
      <h2>${randomPlayer.first_name} ${randomPlayer.last_name}</h2>
      <p>Team: ${randomPlayer.team.full_name}</p>
      <p>Position: ${randomPlayer.position || 'N/A'}</p>
      <p>Height: ${randomPlayer.height_feet || 'N/A'}' ${randomPlayer.height_inches || ''}</p>
      <p>Weight: ${randomPlayer.weight_pounds || 'N/A'} lbs</p>
    `;
  } catch (error) {
    console.error('Error fetching player data:', error);

    // Display error message to the user
    const playerContainer = document.getElementById('meal-container');
    playerContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
