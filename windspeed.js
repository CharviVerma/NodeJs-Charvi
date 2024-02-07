const cityName = 'London';
const apiKey = '04d34bd6395feacde72863bb2da2fc4b';

// Construct the API URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Extract wind speed from the data
    const windSpeed = data.wind.speed;
    console.log(`Wind speed in ${cityName}: ${windSpeed} m/s`);
  })
  .catch(error => {
    console.error('There was a problem fetching data:', error);
  });
