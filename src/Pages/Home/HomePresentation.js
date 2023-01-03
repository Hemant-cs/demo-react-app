import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import NavBar from "../../components/NavBar/NavBar";

function HomePresentation() {
    const [weatherDetails, setWeatherDetails] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8582f8c616mshd7cfff93a8b0d34p136267jsn27c0b8fdb9be',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=indore', options)
            .then(response => response.json())
            .then(response => setWeatherDetails(response))
            .catch(err => console.error(err));
    }, [])


    return (
        <>
        {console.log(typeof weatherDetails ,'home')}
        <NavBar />
        <Table weatherDetails = {weatherDetails}/>
        </>
    )
}

export default HomePresentation;