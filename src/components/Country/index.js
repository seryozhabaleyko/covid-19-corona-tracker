import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';

import Cards from '../Cards';
import Card from '../Card';
import Chart from '../../pages/Countries/components/Chart';

import s from './country.module.scss';

function Country({
    country, population, cases, todayCases, deaths, todayDeaths,
    recovered, todayRecovered, active, tests, updated, countryName,
}) {

    return (
        <div className={s.country}>
            <div className={s.heading}>
                <h1
                    className={s.title}
                >
                    {country}{' '}
                    <span>{population?.toLocaleString()}</span>
                </h1>
                {updated && (
                    <div>
                        Last update:{' '}
                        <span>{format(new Date(updated), 'MM/dd/yyyy @ hh:mma')}</span>{' '}
                        <span>({formatDistanceToNow(new Date(updated))})</span>
                    </div>
                )}
            </div>
            <Cards>
                <Card title="Cases" value={cases}/>
                <Card title="Deaths" value={deaths}/>
                <Card title="Recovered" value={recovered}/>
                <Card title="Active" value={active}/>

                <Card title="Cases Today" value={todayCases}/>
                <Card title="Deaths Today" value={todayDeaths}/>
                <Card title="Recovered Today" value={todayRecovered}/>
                <Card title="Tests" value={tests}/>
            </Cards>
            <div style={{ height: '100px' }}/>
            <Chart country={countryName.toLowerCase()}/>
        </div>
    );
}

export default Country;