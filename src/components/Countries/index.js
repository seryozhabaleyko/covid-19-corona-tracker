import React from 'react';
import { Alert, Pane, SearchInput, Select, Spinner } from 'evergreen-ui';

import useFetch from '../../hooks/useFetch';
import Table from '../Table';

import './Countries.scss';

function Countries() {

    const [{ isLoading, countries, errorMessage }, setFilterByName, setSort] = useFetch('/countries');

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

    const handleChangeSearch = (event) => {
        setFilterByName(event.target.value);
    };

    const handleChangeSelect = (event) => {
        setSort(event.target.value);
    };

    return (
        <section className="countries">
            <header className="countries-heading">
                <h1>Countries</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="countries-search">
                        <SearchInput placeholder="Search Specific Country" height={40} onChange={handleChangeSearch}/>
                    </div>
                    <div className="countries-sort">
                        <Select width={200} height={40} marginLeft={20} onChange={handleChangeSelect}>
                            <option value='default'>Sort By</option>
                            <option value="cases">Total Cases</option>
                            <option value="deaths">Total Deaths</option>
                            <option value="recovered">Total Recovered</option>
                            <option value="active">Total Active</option>
                        </Select>
                    </div>
                </div>
            </header>
            <Table data={countries}/>
        </section>
    );
}

export default Countries;