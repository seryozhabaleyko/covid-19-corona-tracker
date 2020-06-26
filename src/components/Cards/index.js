import React from 'react';

import './Cards.scss';

function Cards({ children }) {

    return (
        <div className="cards">
            {children}
        </div>
    );
}

export default Cards;