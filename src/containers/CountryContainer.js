import React from 'react';

import Country from '../components/Country';
import useGetGeoInfo from '../hooks/useGetGeoInfo';

function CountryContainer({ countries }) {

    const { isLoading, data, errorMessage } = useGetGeoInfo();

    if (isLoading) {
        return (
            <p>Loading...</p>
        );
    }

    if (errorMessage) {
        return (
            <p>Error: {errorMessage}</p>
        );
    }

    const country = countries.filter(({ country }) =>
        country.toLowerCase() === data?.country_name?.toLowerCase());

    console.log(country[0]);

    return (
        <Country {...country[0]} />
    );
}

export default CountryContainer;