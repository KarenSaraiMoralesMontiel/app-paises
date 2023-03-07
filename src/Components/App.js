import React, {useState, useEffect} from "react"
import FilterCountry from "./filterCountry"
import CountriesList from "./CountriesList"
import axios from "axios"

axios
.get("https://restcountries.com/v2/all")
.then(response => {
    //const countries = response.data
    console.log("Got in")
})

const App = () => {
    const [countries, setCountries] = useState([])
    const [countryFilter, setCountryFilter] = useState('')

    useEffect(() => {
        axios
        .get("https://restcountries.com/v2/all")
        .then(response => {
            console.log("Enter then")
           setCountries(response.data)
        })
    }
     , [])

    const handleCountryNewFilter = (event) => {
       setCountryFilter(event.target.value)
    }

    const countriesToShow =
    countryFilter === '' 
    ? countries 
    : countries.filter(
      (x) => 
        x.name
        .toLocaleLowerCase()
        .indexOf(countryFilter.toLocaleLowerCase()) > -1
        )

return (
        <div>
        <FilterCountry handleCountryNewFilter={handleCountryNewFilter}/>
        <CountriesList countries={countriesToShow}  handleButton={handleCountryNewFilter}/>
        </div>
    )
}

export default App