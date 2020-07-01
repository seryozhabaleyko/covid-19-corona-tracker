import React from 'react';

import s from './card.module.scss';

function Card({ image, title, description }) {

    return (
        <div className={s.card}>
            <div className={s.image}>
                <img src={image} alt={title}/>
            </div>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
        </div>
    );
}

export default Card;