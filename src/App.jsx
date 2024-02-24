import React, { useState } from 'react';
import './App.css'; 
import Header from './components/Header';
import SearchBar from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import NoDataMessage from './components/NoDataComponent';

 const apiKey = import.meta.env.VITE_APP_KEY

const getWeather = async (city) => {
  return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};
console.log(getWeather("pune"))

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const getWeatherByCity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity(""); 
  };

  return (
    <div className="app">
{ console.log(weather) }
      <Header/>
      <SearchBar city={city} setCity={setCity} getWeather={getWeatherByCity} />
      {weather.weather ? <WeatherDisplay weather={weather} /> : <NoDataMessage />}
    </div>
  );
}

export default App;
