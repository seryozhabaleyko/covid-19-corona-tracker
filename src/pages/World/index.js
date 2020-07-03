import React from 'react';
import useFetch from 'use-http';
import { Alert, Pane, Spinner } from 'evergreen-ui';
import { format, formatDistanceToNow } from 'date-fns';

import Cards from '../../components/Cards';
import Card from '../../components/Card';
import { baseUrl } from '../../utils/api';

import map from '../../assets/images/corona-case-map.png';

import s from './world.module.scss';
import Chart from './components/Chart';

function World() {

    const { loading, data, error } = useFetch(`${baseUrl}/covid-19/all`, []);

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
        <section className={s.world}>
            <div className="container">
                <header className={s.heading}>
                    <h1 className={s.title}>World</h1>
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
                <div className={s.cover}>
                    <img src={map} alt="map"/>
                </div>
                <Chart/>
                <div style={{ height: '100px' }}/>
            </div>
        </section>
    );
}

export default World;