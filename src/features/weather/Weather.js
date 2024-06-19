import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "./weatherSlice";

const Weather = () => {
  const { metadata, temperature, city, state } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather({ city, state }));
  }, [dispatch, city, state]);
  
  return (
    <div className="weather">
      <div className="temperature-container">
        <img
          src={`http://openweathermap.org/img/wn/${metadata.icon}@2x.png`}
          alt=""
        />
        <div className="weather-text">
          <p className="temperature">{temperature}°C</p>
          <p className="weather-description">{metadata.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
