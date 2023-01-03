import React, { useEffect, useState } from "react";

function HomePresentation (){
    const [weatherDetails, setWeatherDetails] = useState([])
    
      useEffect(()=>{
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
      },[])
      
      
    return(
        <>
        <h1>Hello from Home component</h1>
        </>
    )
}

export default HomePresentation;