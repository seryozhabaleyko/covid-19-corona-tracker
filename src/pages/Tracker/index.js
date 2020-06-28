import React from 'react';

import World from '../../components/World';
import Countries from '../../components/Countries';

import './Tracker.scss';

function Tracker() {

    return (
        <>
            <World/>
            <div className="container">
                <Countries/>
                <div style={{ height: '100px' }}/>
            </div>
        </>
    );
}

export default Tracker;