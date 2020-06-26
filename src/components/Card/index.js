import React from 'react';

import './Card.scss';

function StatCard({ title, value }) {

    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <h1 className="card-value">{value?.toLocaleString()}</h1>
        </div>
    );
}

export default StatCard;