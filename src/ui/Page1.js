import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from 'react-router';
import LottiePlayer from '../components/LottiePlayer';
import animationData1 from '../assets/lottie/watermelon.json'


const Page1 = () => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const [show, setShow] = useState(false);
    const [showCount, setShowCount] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    const [message, setMessage] = useState(`Let me guess your age it's`)
    const [letters, setLetters] = useState(message.split(''));

    const handleCorrect = () => {
        let msg = "Hahaha I Know everything, Now follow me";
        setShow(false)
        setShowCount(false)
        setMessage(msg);
        setLetters(msg.split(''));
        setShowButton(true);
    }

    const handleWrong = () => {
        let msg = "What the *** I Know you better than you. Now come with me";
        setShow(false)
        setShowCount(false)
        setMessage(msg)
        setLetters(msg.split(''));

        setShowButton(true);

    }
    useEffect(() => {
        const animation = animate(count, 23, { duration: 10 });

        return animation.stop;
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, [])

    const Letter = ({ children }) => (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.1,
                ease: [0.17, 0.67, 0.83, 0.67],
            }}
        >
            {children}
        </motion.span>
    );

    return (
        <div className="bg-bday-theme1 opacity-50 h-screen w-screen z-[9999] flex flex-col gap-y-5 justify-center items-center">

            <h1 className='text-4xl font-mac text-center w-1/2 '>
                <motion.h1
                    key={message}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: [0.17, 0.67, 0.83, 0.67], delay: 0.5 }}
                >
                    {letters.map((letter, index) => (
                        <Letter key={index} style={{ display: 'inline-block' }}>
                            {letter}
                        </Letter>
                    ))}
                </motion.h1>
            </h1>

            <div >
                <LottiePlayer
                    animationData={animationData1}
                    loop={true}
                    autoplay={true}
                    width={400}
                    height={400}
                    classNames={'absolute -top-0'}
                />
            </div>


            {showCount &&
                <h1 className='text-5xl font-mac'>
                    <motion.h1
                        animate={{ opacity: 100 }}
                        transition={{ from: 0, easeIn: [0.17, 0.67, 0.83, 0.67], delay: 0.5 }}
                    >{rounded}</motion.h1>
                </h1>
            }

            {show &&
                <motion.div
                    key={show}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ from: 0, ease: [0.17, 0.67, 0.83, 0.67] }}
                    className='flex font-mac flex-col gap-y-3 w-1/2'>
                    <button onClick={handleCorrect} className="cursor-pointer rounded-3xl font-semibold overflow-hidden relative z-100 border border-green-600 group px-8 py-2">
                        <span className="relative z-10 text-green-600 group-hover:text-white text-xl duration-500">Correct</span>
                        <span className="absolute w-full h-full bg-green-600 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                        <span className="absolute w-full h-full bg-green-600 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                    </button>
                    <button onClick={handleWrong} className="cursor-pointer rounded-3xl font-semibold overflow-hidden relative z-100 border border-bday-primary group px-8 py-2">
                        <span className="relative z-10 text-bday-primary group-hover:text-white text-xl duration-500">LOL Wrong!</span>
                        <span className="absolute w-full h-full bg-bday-primary -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                        <span className="absolute w-full h-full bg-bday-primary -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                    </button>

                </motion.div>
            }

            {showButton &&
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ from: 0, easeIn: [0.17, 0.67, 0.83, 0.67], delay: 0.5 }}
                    onClick={() => navigate('/page2')} className="cursor-pointer rounded-3xl font-semibold overflow-hidden relative z-100 border border-bday-secondary group px-8 py-2">
                    <span className="relative z-10 text-bday-secondary group-hover:text-white text-xl duration-500">Let's Start</span>
                    <span className="absolute w-full h-full bg-bday-secondary -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span className="absolute w-full h-full bg-bday-secondary -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </motion.button>

            }
        </div>
    );
};

export default Page1;