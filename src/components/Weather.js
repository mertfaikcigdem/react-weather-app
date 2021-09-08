import React, { useState, useEffect } from "react";
import cities from "../cities";
import "./Weather.css";
function Weather() {
  const [weahterData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");
  const [today, setToday] = useState("");
  const key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    setToday(new Date().toString().split(" ")[0]);
  }, []);
  let cityValue = "";
  const selectedCity = async (e) => {
    e.preventDefault();
    cityValue = e.target.value;
    setCity(cityValue);
    try {
      const data = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cityValue}&days=7&aqi=no&alerts=no`
      );
      const result = await data.json();
      setWeatherData(result.forecast.forecastday);
    } catch {
      alert("Veri alınırken bir hata oluştu.");
    }
  };
  return (
    <div className="main">
      <h4>WEATHER APP</h4>
      <div className="city">
        <select onChange={selectedCity}>
          <option value="">Bir şehir seçiniz.</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="weather">
        {city === "" ? (
          <span className="text">Bir şehir seçiniz.</span>
        ) : (
          weahterData.map((item, index) => (
            <div
              key={index}
              className={`weather-info ${
                today === new Date(item.date).toDateString().split(" ")[0]
                  ? "active"
                  : ""
              }`}
            >
              <span className="text">
                {new Date(item.date).toDateString().split(" ")[0]}
              </span>
              <img src={item.day.condition.icon} alt="icon" />
              <span className="text">
                {item.day.maxtemp_c}°C / {item.day.mintemp_c}°C
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Weather;
