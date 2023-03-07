import React from "react"
import CountryData from "./CountryData"
import CountryItem from "./CountryItem"

const CountriesList =({countries, handleButton}) => {
    return (
<>
{
    countries.length > 1 && (
        countries.length > 10 ? (<div>Too many matches</div>) :
    (
        <div>
            {
                countries.map(x =>
                    <CountryItem key={x.name} country={x} handleButton={handleButton}/>
                    )
            }
        </div>
))
}

{
    countries.length === 1 &&
    ( countries.length === 0 ? <div> No matches </div> :
           <CountryData country={countries['0']} />
    )
}
</>
        
    )
}
export default CountriesList