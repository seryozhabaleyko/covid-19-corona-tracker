import React from 'react';
import classNames from 'classnames';

import './Card.scss';

function StatCard({ title, value, className }) {

    return (
        <div className={classNames('card', className)}>
            <h2 className="card-title">{title}</h2>
            <h1 className="card-value">{value?.toLocaleString()}</h1>
        </div>
    );
}

export default StatCard;