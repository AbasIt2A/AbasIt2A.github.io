const apiKey = 'd56203e5-e393-4242-b7f2-1d8914fd2f64';
const baseUrl = 'https://api.balldontlie.io/v1/players';

// Fetch and display a random NBA player
async function fetchPlayerData() {
  try {
    // Make the API request to get a list of players (you can adjust the number if needed)
    const response = await fetch(baseUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON response
    const data = await response.json();

    // Randomly select a player from the response
    const players = data.data; // This should contain player data now
    if (!players || players.length === 0) {
      throw new Error('No players found.');
    }

    const randomPlayer = players[Math.floor(Math.random() * players.length)];

    // Update the HTML to display the player's details
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
    const playerContainer = document.getElementById('NBA-container');
    playerContainer.innerHTML = `<p>Error fetching player data: ${error.message}</p>`;
  }
}