import { useState, useEffect } from "react"
import axios from "axios"

const Weather = ({country}) => {
    const [ weatherDetails, setWeatherDetails ] = useState(null)
    useEffect(()=>{    
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY.trim()}&query=${country}`)
            .then(response => {
                console.log(response)
                if (response.data.error){
                    throw response.data.error.info
                }
                setWeatherDetails(response.data)                             
            }).catch(error => {
                console.log(error)
                alert(`Error fetching weather details : ${error}`)
            })     
        }, []
    )
    if (weatherDetails){        
        return (
            <div>
                <h2>Weather in {country}</h2>
                <p><b>temperature: </b> {weatherDetails.current.temperature} Celsius</p>
                <img src={weatherDetails.current.weather_icon || weatherDetails.current.weather_icons[0]} alt={weatherDetails.current.weather_description || weatherDetails.current.weather_descriptions[0]} />
                <p><b>wind: </b> {weatherDetails.current.wind_speed} mph direction {weatherDetails.current.wind_dir}</p>
            </div>
        )
    }
    return null
}

export default Weather