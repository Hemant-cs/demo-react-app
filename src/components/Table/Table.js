import React from "react";
import './Table.css'

const Table = (props) => {
  return (
    <>
      <table className="table mt-30">
        <thead>
          <tr>
            <th scope="col">Feels Like</th>
            <th scope="col">Humidity</th>
            <th scope="col">Max Temp</th>
            <th scope="col">Min Temp</th>
            <th scope="col">Sunrise</th>
            <th scope="col">Sunset</th>
            <th scope="col">Temp</th>
            <th scope="col">Wind Degrees</th>
            <th scope="col">Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>{props.weatherDetails.feels_like}</td>
          <td>{props.weatherDetails.humidity}</td>
          <td>{props.weatherDetails.max_temp}</td>
          <td>{props.weatherDetails.min_temp}</td>
          <td>{props.weatherDetails.sunrise}</td>
          <td>{props.weatherDetails.sunset}</td>
          <td>{props.weatherDetails.temp}</td>
          <td>{props.weatherDetails.wind_degrees}</td>
          <td>{props.weatherDetails.wind_speed}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
