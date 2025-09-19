import React, { use, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);

        console.log(country.name.common);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div className='countries'>
            <div className='title-wrap'>
                <h1 className='countries-title'>In the Countries: {countries.length}</h1>
                <h3 className='countries-subtitle'>Total Country Visited: {visitedCountries.length}</h3>
            </div>
            <ul className={`visisted-country-list ${visitedCountries.length < 1 ? 'visisted-country-list-hide' : ''}`}>
                {
                    visitedCountries.map((country) => {
                        return (
                            <li key={country.cca3.cca3}>
                                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                            </li>
                        )
                    })
                }
            </ul>
            <div className='countries-wrap row'>
                {
                    countries.map((country) => {
                        return (
                            <Country
                                key={country.cca3.cca3}
                                country={country}
                                handleVisitedCountries={handleVisitedCountries}
                            ></Country>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Countries;