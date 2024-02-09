import React from 'react';
import { Search } from 'react-feather';

function SearchBar({ city, setCity, getWeather }) {
  return (
    <div className="input-wrapper">
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter City Name" 
      />
      <button onClick={getWeather}>
        <Search />
      </button>
    </div>
  );
}

export default SearchBar;
