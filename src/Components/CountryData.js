import React from "react"
import Weather from "./Weather"

const CountryData = ({country}) => {
    return (
        <div>
        <h1> {country.name} </h1>
        <p>capital {country.capital}</p>
        <p>population {country.population} </p>
        <h2>Languages</h2>
        <ul>
            {Object.values(country.languages).map((language) => (
                <li key={language.name}>{language.name}</li>
            ))}
        </ul>
        <img src={country.flag} alt="" width={"100px"} height={"100px"}/>
        <Weather capital={country.capital}/>
        </div>
    )
}

export default CountryData