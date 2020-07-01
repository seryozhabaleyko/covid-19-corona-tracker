import React from 'react';
import { Alert, Pane, Spinner } from 'evergreen-ui';
import { format, formatDistanceToNow } from 'date-fns';

import Cards from '../../components/Cards';
import useFetch from '../../hooks/useFetch';
import Card from '../../components/Card';

import map from '../../assets/images/corona-case-map.png';

import './World.scss';

function World() {

    const { isLoading, data, errorMessage } = useFetch('/all');

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
        <section className="world">
            <div className="container">
                <header className="world-heading">
                    <h1>World</h1>
                    {data?.updated && (
                        <div>
                            Last update:{' '}
                            <span>{format(new Date(data?.updated), 'MM/dd/yyyy @ hh:mma')}</span>{' '}
                            <span>({formatDistanceToNow(new Date(data?.updated))})</span>
                        </div>
                    )}
                </header>
                <Cards>
                    <Card title="Cases" value={data?.cases}/>
                    <Card title="Deaths" value={data?.deaths}/>
                    <Card title="Recovered" value={data?.recovered}/>
                    <Card title="Active" value={data?.active}/>

                    <Card title="Cases Today" value={data?.todayCases}/>
                    <Card title="Deaths Today" value={data?.todayDeaths}/>
                    <Card title="Critical" value={data?.critical}/>
                    <Card title="Affected Countries" value={data?.affectedCountries}/>
                </Cards>
                <div className="world-cover">
                    <img src={map} alt="map"/>
                </div>
            </div>
        </section>
    );
}

export default World;