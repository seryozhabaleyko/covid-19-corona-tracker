import React from 'react';

import World from '../World';
import Countries from '../Countries';

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