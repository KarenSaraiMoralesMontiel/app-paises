import React from "react";

const CountryItem = ({country, handleButton})  =>{
   return ( 
    <div key={country.name}>
        {country.name} {' '}
        <button onClick={handleButton} value= {country.name}>
        show</button>
    </div> )
}

export default CountryItem