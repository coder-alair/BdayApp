import React from 'react';
import { Lottie, useLottie } from 'lottie-react';

const LottiePlayer = ({ animationData, loop = true, autoplay = true, width = 300, height = 300, classNames }) => {
    const options = {
        animationData: animationData,
        loop,
        height,
        width,
        autoplay
    };

    const { View } = useLottie(options);
    return (
        <div className={classNames}>
            {View}
        </div>
    );
};

export default LottiePlayer;
