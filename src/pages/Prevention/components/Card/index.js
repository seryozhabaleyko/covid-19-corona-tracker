import React from 'react';
import classNames from 'classnames';

import s from './card.module.scss';

function Card({ className, lottie, title, description }) {

    const classes = classNames(s.card, className);

    return (
        <div
            className={classes}
        >
            <div
                className={s.lottie}
            >
                {lottie}
            </div>
            <h3
                className={s.title}
            >
                {title}
            </h3>
            <p
                className={s.description}
            >
                {description}
            </p>
        </div>
    );
}

export default Card;