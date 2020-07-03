import React from 'react';
import useFetch from 'use-http';
import { Alert, Pane, Spinner } from 'evergreen-ui';

import Table from '../../components/Table';
import { baseUrl } from '../../utils/api';
import CountryContainer from '../../containers/CountryContainer';

import './Countries.scss';

function Countries() {

    const { loading, data, error } = useFetch(`${baseUrl}/covid-19/countries`, []);

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

    return (
        <div className="container">
            <CountryContainer countries={data}/>
            <div style={{ height: '100px' }}/>
            <Table countries={data}/>
            <div style={{ height: '100px' }}/>
        </div>
    );
}

export default Countries;