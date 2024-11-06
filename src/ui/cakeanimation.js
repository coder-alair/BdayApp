import React, { useEffect } from 'react';
import LottiePlayer from '../components/LottiePlayer';
import animationData1 from '../assets/lottie/cake2.json'
import animationData2 from '../assets/lottie/gift1.json'
import { useNavigate } from 'react-router';

const Cakeanimation = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/page3')
        }, 10000);

        return () => clearTimeout(timer);
    }, [])


    return (
        <div className='h-screen w-screen'>
            <LottiePlayer
                animationData={animationData1}
                loop={true}
                autoplay={true}
                width={400}
                height={1000}
                classNames={''}
            />
            <LottiePlayer
                animationData={animationData2}
                loop={true}
                autoplay={true}
                width={400}
                height={1000}
                classNames={''}
            />
        </div>
    );
};

export default Cakeanimation;