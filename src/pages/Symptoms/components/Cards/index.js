import React from 'react';
import classNames from 'classnames';

import s from './cards.module.scss';

function Cards({ className, children }) {

    const classes = classNames(s.cards, className);

    return (
        <div className={classes}>{children}</div>
    );
}

export default Cards;