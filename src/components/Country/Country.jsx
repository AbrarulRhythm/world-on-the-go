import React from 'react';
import './Country.css';

const Country = ({ country }) => {

    return (
        <div className='col-12 col-md-4 col-lg-3 mb-24'>
            <div className='country'>
                <img src={country.flags.flags.png} alt="" />
                <h3>Name: {country.name.common}</h3>
                <p>Capital: {country.capital.capital}</p>
                <p>Population: {country.population.population}</p>
                <button>Not Visited</button>
            </div>
        </div >
    );
};

export default Country;