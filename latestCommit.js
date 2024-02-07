// Replace 'username' and 'repository' with the appropriate GitHub username and repository name
const username = 'CharviVerma';
const repository = 'NodeJs-Charvi';

// Construct the URL to fetch commit history from GitHub API
const apiUrl = `https://api.github.com/repos/${username}/${repository}/commits`;

// Fetch commit history from GitHub API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Check if data is not empty
    if (data.length > 0) {
      // Get the latest commit
      const latestCommit = data[0];
      console.log('Latest commit:', latestCommit);
    } else {
      console.log('No commits found');
    }
  })
  .catch(error => {
    console.error('There was a problem fetching data:', error);
  });
