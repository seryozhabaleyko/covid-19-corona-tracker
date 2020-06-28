import React from 'react';
import { Alert, Pane, Spinner } from 'evergreen-ui';

import useFetch from '../../hooks/useFetch';
import Table from '../Table';

import './Countries.scss';

function Countries() {

    const { isLoading, data, errorMessage } = useFetch('/countries');

    if (isLoading) {
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

    if (errorMessage) {
        return (
            <Alert
                intent="danger"
                title={errorMessage}
            />
        );
    }

    return (
        <>
            <div style={{ height: '100px' }}/>
            <Table countries={data}/>
            {/*<section className="countries">
                <header className="countries-heading">
                    <h1>Countries</h1>
                </header>
            </section>*/}
        </>
    );
}

export default Countries;