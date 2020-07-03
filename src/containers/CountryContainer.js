import React from 'react';
import useFetch from 'use-http';
import { Alert, Pane, Spinner } from 'evergreen-ui';

import Country from '../components/Country';

function CountryContainer({ countries }) {

    const { loading, data, error } = useFetch('https://ipapi.co/json/', []);

    if (loading) {
        return (
            <Pane
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={400}
            >
                <Spinner/>
            </Pane>
        );
    }

    if (error) {
        return <Alert intent="danger" title={error}/>;
    }

    const currentCountryName = data?.country_name?.toLowerCase();

    const country = countries.filter(({ country }) =>
        country.toLowerCase() === currentCountryName);

    return <Country {...country[0]} countryName={currentCountryName}/>;
}

export default CountryContainer;