import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';

import Cards from '../Cards';
import useFetch from '../../hooks/useFetch';

import './Country.scss';

function Country() {
    const [{ isLoading, data, errorMessage }, handleRequest] = useFetch('/countries/belarus');

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (errorMessage) {
        return <p>{errorMessage}</p>;
    }

    return (
        <div className="countries">
            <div className="countries-heading">
                <h1>Countries</h1>
                {data?.updated && (
                    <div>
                        Last update:{' '}
                        <span>{format(new Date(data?.updated), 'MM/dd/yyyy @ hh:mma')}</span>{' '}
                        <span>({formatDistanceToNow(new Date(data?.updated))})</span>
                    </div>
                )}
            </div>
            <div>
                <img src={data?.countryInfo?.flag} alt={data?.country}/>
            </div>
            <Cards data={data}/>
            <button onClick={() => handleRequest('/countries/russia')}>Countries</button>
        </div>
    );
}

export default Country;