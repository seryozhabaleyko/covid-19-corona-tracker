import React from 'react';
import Lottie from 'react-lottie';

import animationData from './lf30_yQtj4O.json';

function UseSoapOrSanitizerLottie() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Lottie options={defaultOptions} width={180} height={180}/>
    );
}

export default UseSoapOrSanitizerLottie;