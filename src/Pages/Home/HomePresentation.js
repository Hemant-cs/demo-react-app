import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Cards/Card";

function HomePresentation() {
  const [weatherDetails, setWeatherDetails] = useState({});
  const [selectedCity, setSelectedCity] = useState("Indore");

  const topCityArray = ["Delhi", "varanasi", "Lucknow"];

  useEffect(() => {
    fetchWeatherDetails(selectedCity);
  }, []);
  const changeCity = (cityName) => {
    fetchWeatherDetails(cityName);
    setSelectedCity(cityName);
  };

  const fetchWeatherDetails = (cityName) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8582f8c616mshd7cfff93a8b0d34p136267jsn27c0b8fdb9be",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setWeatherDetails(response))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <NavBar selectedCity={selectedCity} changeCity={changeCity} />
      <Table weatherDetails={weatherDetails} />
      {topCityArray.forEach((element) => {
        <Card />
      })}
    </>
  );
}

export default HomePresentation;
