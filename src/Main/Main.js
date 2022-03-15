import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../services/country';

import CountryCard from '../components/CountryCard/';
export default function Main() {
    useEffect(() => {
        const fetchCountries = async () => {
            const response = await getCountries();
            console.log(response);
            //   setBlogs(response);
        };
        fetchCountries();

    }, []);
    return (
        <div>Main


        </div>
    );
}