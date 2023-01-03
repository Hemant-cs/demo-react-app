import React from "react";

const Table = (props) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">feels_like</th>
                        <th scope="col">humidity</th>
                        <th scope="col">max_temp</th>
                        <th scope="col">min_temp</th>
                        <th scope="col">sunrise</th>
                        <th scope="col">sunset</th>
                        <th scope="col">temp</th>
                        <th scope="col">wind_degrees</th>
                        <th scope="col">wind_speed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {props.weatherDetails ? console.log(props.weatherDetails.feels_like):null}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;