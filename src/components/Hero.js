import React from 'react';
import bg1 from '../assets/svg/bg1.png'
import Popup from './PopupText';
import LottiePlayer from './LottiePlayer';
import animationData1 from '../assets/lottie/popper1.json'
import animationData3 from '../assets/lottie/popper3.json'
import { useLottie } from 'lottie-react';

const Hero = () => {
   
    return (
        <div className='w-screen h-screen overflow-hidden relative'>
            <div>
                <LottiePlayer
                    animationData={animationData1}
                    loop={true}
                    autoplay={true}
                    width={500}
                    height={500}
                    classNames={'absolute -left-[20%]'}
                />
            </div>
            <div>
                <LottiePlayer
                    animationData={animationData1}
                    loop={true}
                    autoplay={true}
                    width={500}
                    height={500}
                    classNames={'absolute -right-[20%]'}
                />
            </div>
            <div>
                <LottiePlayer
                    animationData={animationData3}
                    loop={false}
                    autoplay={true}
                    width={500}
                    height={500}
                    classNames={'absolute'}
                />
            </div>
            <img src={bg1} loading='lazy' className=' opacity-100 h-full object-cover' />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <div className='absolute flex flex-col gap-y-[5rem] top-[35%] left-[50%]'>
                <p className='text-6xl font-mac text-center relative flex flex-col '>
                    <Popup text={'Happy'} />
                </p>
                <p className='text-7xl  font-mac text-center relative flex flex-col '>
                    <Popup text={'Birthday'} />
                </p>
                <p className='text-6xl  font-mac text-center relative flex flex-col '>
                    <Popup text={'Zoya'} />
                </p>

            </div>
        </div>
    );
};

export default Hero;