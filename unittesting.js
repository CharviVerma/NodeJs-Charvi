
const fetchMock = require('fetch-mock');
const getWindSpeed = require('./getWindSpeed');

describe('getWindSpeed', () => {
  const cityName = 'London';
  const apiKey = '04d34bd6395feacde72863bb2da2fc4b';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  beforeEach(() => {
   
    fetchMock.get(apiUrl, {
      wind: {
        speed: 5.5 
      }
    });
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('should fetch wind speed from the OpenWeatherMap API', async () => {
    const windSpeed = await getWindSpeed(cityName, apiKey);
    expect(windSpeed).toBe(5.5); 
  });

  it('should handle network errors', async () => {
    fetchMock.get(apiUrl, { throws: new Error('Network error') });

    await expect(getWindSpeed(cityName, apiKey)).rejects.toThrow('Network error');
  });

  it('should handle invalid API response', async () => {
    fetchMock.get(apiUrl, { wind: { speed: 'invalid' } });

    await expect(getWindSpeed(cityName, apiKey)).rejects.toThrow('Invalid wind speed');
  });
});
