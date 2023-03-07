import React from "react"

const FilterCountry = ({handleCountryNewFilter}) => {

    return (
        <div>
            filter country: <input onChange={handleCountryNewFilter}/>
        </div>
    )
}

export default FilterCountry