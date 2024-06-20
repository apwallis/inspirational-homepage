const API_KEY = "18c31981640b53c9fd989e4c5e436a88";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

export const getWeather = async (city, state) => {
  const response = await fetch(`${API_URL}&q=${city},${state}`);
  const json = await response.json();

  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp
  };
};

const openWeatherMapApi = {
  getWeather
};

export default openWeatherMapApi;