import React from 'react';

import WashYourHandsLottie from '../../lotties/WashYourHandsLottie';
import WearFaceMaskLottie from '../../lotties/WearFaceMaskLottie';
import AvoidCloseContactLottie from '../../lotties/AvoidCloseContactLottie';

import Cards from './components/Cards';
import Card from './components/Card';

import StayAtHomeLottie from '../../lotties/StayAtHomeLottie';
import UseSoapOrSanitizerLottie from '../../lotties/UseSoapOrSanitizerLottie';
import KeepInformDoctorsLottie from '../../lotties/KeepInformDoctorsLottie';

import s from './prevention.module.scss';

const figures = [
    {
        id: 1,
        lottie: <WashYourHandsLottie/>,
        title: 'Wash Your Hands',
        description: 'Wash your hands frequently and regularly with an alcohol based hand rub or wash them with soap and water.',
    },
    {
        id: 2,
        lottie: <WearFaceMaskLottie/>,
        title: 'Wear Face Mask',
        description: 'Wear sergical mask and avoid touching face. Hands touch many surfaces and can pick up viruses once contaminated.',
    },
    {
        id: 3,
        lottie: <AvoidCloseContactLottie/>,
        title: 'Avoid Close Contact',
        description: 'Please maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.',
    },
    {
        id: 4,
        lottie: <StayAtHomeLottie/>,
        title: 'Stay at Home',
        description: 'Stay home, stay safe. if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention.',
    },
    {
        id: 5,
        lottie: <UseSoapOrSanitizerLottie/>,
        title: 'Use Soap or Sanitizer',
        description: 'Use alcohol based hand sanitizer or soap when you wash your hands. Keep wash yor hands at least 20 minute during handwash.',
    },
    {
        id: 6,
        lottie: <KeepInformDoctorsLottie/>,
        title: 'Keep Inform Doctors',
        description: 'If you are think you are suffering with this above symptoms. Please call a doctor as soon as posible for your medical advice.',
    },
];

function Prevention() {

    return (
        <div className="container">
            <div className={s.heading}>
                <h1 className={s.title}>Coronavirus COVID-19 Prevention</h1>
                <p className={s.description}>You can protect yourself and help prevent spreading the coronavirus
                    (COVID-19) to others if you do all the step shown as this infographics. You can safe from
                    coronavirus and safe other if you are affected</p>
            </div>

            <Cards>
                {figures.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </Cards>
        </div>
    );
}

export default Prevention;