import React from "react";
import { useSelector } from "react-redux";

const Weather = () => {
  const { metadata, temperature } = useSelector(
    (state) => state.weather
  );
  
  return (
    <div className="weather">
      <div className="temperature-container">
        <img
          src={`http://openweathermap.org/img/wn/${metadata.icon}@2x.png`}
          alt=""
        />
        <div className="weather-text">
          <p className="temperature">{temperature}°</p>
          <p className="weather-description">{metadata.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
