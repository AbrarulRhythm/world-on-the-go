import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        if (visited) {
            setVisited(false);
        }
        else {
            setVisited(true);
        }

        handleVisitedCountries(country);
    }

    return (
        <div className='col-12 col-md-4 col-lg-3 mb-24'>
            <div className={`country ${visited && 'country-visited'}`}>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                <h3>Name: {country.name.common}</h3>
                <p>Capital: {country.capital.capital}</p>
                <p>Population: {country.population.population}</p>
                <p>Area: {country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'}</p>
                <button onClick={handleVisited}>
                    {visited ? 'Visited' : 'Not Visited'}
                </button>
            </div>
        </div >
    );
};

export default Country;