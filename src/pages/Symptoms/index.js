import React from 'react';

import Cards from './components/Cards';
import Card from './components/Card';

import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import six from './6.png';

import s from './symptoms.module.scss';

const symptoms = [
    {
        id: 1,
        image: one,
        title: 'High Fever',
        description: 'According to the WHO, the most common symptoms of Covid-19 are fever. Fever is a key symptom, experts say.',
    },
    {
        id: 2,
        image: two,
        title: 'Sore Throat',
        description: 'A scratchy sensation in the throat, pain in the throat area that becomes worse when swallowing or talking.',
    },
    {
        id: 3,
        image: three,
        title: 'Dry Cough',
        description: 'Basically, a dry cough is "one where no mucus or phlegm is produced with the cough, A cough that doesn’t go away.',
    },
    {
        id: 4,
        image: four,
        title: 'Sneezing',
        description: 'Sneezing is very common symptom in Coronavirus patient. Sneezing (sternutation) is the act of expelling a sudden.',
    },
    {
        id: 5,
        image: five,
        title: 'Shortness of Breath',
        description: 'Commonly known as tightening in the chest, air hunger, difficulty breathing, feeling of suffocation. These symptoms.',
    },
    {
        id: 6,
        image: six,
        title: 'Vomiting',
        description: 'It’s not a regular symptoms of coronavirus patients Symptoms that occur with nausea and vomiting include: abdominal pain.',
    },
];

function Symptoms() {

    return (
        <div className="container">
            <div
                className={s.heading}
            >
                <h1
                    className={s.title}
                >
                    Coronavirus COVID-19 Symptoms
                </h1>
                <p
                    className={s.description}
                >
                    The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have
                    aches and pains, nasal congestion, runny nose, sore throat or diarrhea.
                </p>
            </div>

            <Cards>
                {symptoms.map((symptom) => (
                    <Card key={symptom.id} {...symptom} />
                ))}
            </Cards>
        </div>
    );
}

export default Symptoms;