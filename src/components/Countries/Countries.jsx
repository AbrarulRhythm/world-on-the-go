import React, { use } from 'react';
import './Countries.css';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div className='countries'>
            <h1 className='countries-title'>In the Countries: {countries.length}</h1>
            <div className='countries-wrap row'>
                {
                    countries.map((country) => {
                        return (
                            <Country
                                key={country.cca3.cca3}
                                country={country}
                            ></Country>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Countries;