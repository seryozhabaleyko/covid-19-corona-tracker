import React from 'react';

import './Table.scss';

function Table({ data }) {

    return (
        <table className="table">
            <thead>
            <tr>
                <th>Country</th>
                <th>Cases</th>
                <th>Deaths</th>
                <th>Recovered</th>
                <th className="no-mob">Active</th>
                <th className="no-mob">Tests</th>
                <th className="no-mob">Population</th>
            </tr>
            </thead>
            <tbody>
            {data?.map(({ country, countryInfo, cases, recovered, deaths, active, population, tests }) => (
                <tr key={country}>
                    <td>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img width="30px" style={{ marginRight: '20px' }} src={countryInfo?.flag} alt={country}/>
                            {country}
                        </div>
                    </td>
                    <td><span className="cases"/>{cases?.toLocaleString()}</td>
                    <td><span className="deaths"/>{deaths?.toLocaleString()}</td>
                    <td><span className="recovered"/>{recovered?.toLocaleString()}</td>
                    <td className="no-mob">{active?.toLocaleString()}</td>
                    <td className="no-mob">{tests?.toLocaleString()}</td>
                    <td className="no-mob">{population?.toLocaleString()}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;