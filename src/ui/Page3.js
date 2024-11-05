import React, { useEffect } from 'react';
import Hero from '../components/Hero'
import audioFile from '../assets/mp3/bdaysong1.mp3'
import ReactHowler from 'react-howler';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useNavigate } from 'react-router';
import LottiePlayer from '../components/LottiePlayer';
import animationData1 from '../assets/lottie/penguin.json'



const Page3 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/page4')
    }

    return (
        <div>
            <ReactHowler
                src={audioFile}
                playing={true}
                loop={false}
                volume={1}
            />
            <Hero />
            <div className='absolute bottom-2 right-2'>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ from: 0, easeIn: [0.17, 0.67, 0.83, 0.67], delay: 30 }}
                    onClick={() => handleClick()} className="cursor-pointer rounded-3xl font-semibold overflow-hidden relative z-100 border bg-bday-secondary group px-8 py-2">
                    <span className="relative z-10 text-white group-hover:text-white text-xl duration-500">Next</span>
                    <span className="absolute w-full h-full text-bday-secondary -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span className="absolute w-full h-full text-bday-secondary -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </motion.button>

            </div>

            <div >
                <LottiePlayer
                    animationData={animationData1}
                    loop={true}
                    autoplay={true}
                    width={400}
                    height={400}
                    classNames={'absolute -top-12'}
                />
            </div>

        </div>
    );
};

export default Page3;