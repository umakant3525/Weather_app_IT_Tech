import React from 'react';
import { MapPin, Wind } from 'react-feather';
import dateFormat from 'dateformat';

function WeatherDisplay({ weather }) {
  const renderDate = () => {
    const now = new Date();
    return dateFormat(now, "dddd, mmmm dS, h:MM TT");
  };

  return (
    <div className="content">
      {/* Location */}
      <div className="location d-flex">
        <MapPin />
        <h2>{weather.name} <span>({weather.sys.country})</span></h2>
      </div>
      {/* Current date */}
      <p className="datetext">{renderDate()}</p>
      {/* Weather description */}
      <div className="weatherdesc d-flex flex-c">
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="" />
        <h3>{weather.weather[0].description}</h3>
      </div>
      {/* Temperature */}
      <div className="tempstats d-flex flex-c">
        <h1>{weather.main.temp} <span>&deg;C</span></h1>
        <h3>Feels Like {weather.main.feels_like} <span>&deg;C</span></h3>
      </div>
      {/* Wind */}
      <div className="windstats d-flex">
        <Wind />
        <h3>Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg;</h3>
      </div>
    </div>
  );
}

export default WeatherDisplay;
