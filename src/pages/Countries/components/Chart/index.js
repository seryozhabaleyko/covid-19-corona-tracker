import React from 'react';
import { Line } from 'react-chartjs-2';
import useFetch from 'use-http';
import { Alert, Pane, Spinner } from 'evergreen-ui';
import { format } from 'date-fns';

function Chart({ country }) {

    const url = `https://api.covid19api.com/country/${country}`;

    const { loading, data, error } = useFetch(url, []);

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

    const dataLine = {
        labels: data.map(({ Date: data }) => format(new Date(data), 'MM/dd/yyyy')),
        datasets: [
            {
                label: 'Confirmed',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data.map(({ Confirmed: confirmed }) => confirmed),
            },
            {
                label: 'Deaths',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(244, 67, 54, 0.4)',
                borderColor: 'rgba(244, 67, 54, 1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data.map(({ Deaths: deaths }) => deaths),
            },
            {
                label: 'Recovered',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(76, 175, 80, 0.4)',
                borderColor: 'rgba(76, 175, 80, 1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data.map(({ Recovered: recovered }) => recovered),
            },
        ],
    };

    return (
        <Line data={dataLine}/>
    );
}

export default Chart;