import React, {useEffect, useState} from "react"
import axios from "axios"



const Weather = ({capital}) => {
    const [dataWeather, setDataWeather] = useState({})
    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(()=>{
        axios
        .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`)
        .then((response) => {
            const clime = response.data.current
            console.log(response)
            setDataWeather({
                temperature : clime.temperature,
                weather_icons: clime.weather_icons,
                wind_speed: clime.wind_speed,
                wind_dir:clime.wind_dir
            })
        }).catch(error =>{
            console.log(error)
        })
    },[apiKey, capital])
    return(
        <div>
            <h2>Weather</h2>
            <b>Temperature: </b> {dataWeather.temperature} Celsius <br/>
            <img src={dataWeather.weather_icons} alt=""/><br/>
            <b>Wind: </b> {dataWeather.wind_speed} {dataWeather.wind_dir}
            
        </div>
    )
}

export default Weather