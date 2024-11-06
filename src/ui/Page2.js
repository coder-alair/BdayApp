import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router';
import LottiePlayer from '../components/LottiePlayer';
import animationData1 from '../assets/lottie/love1.json'



const Page2 = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([`Once, there was a girl who made a wish on her birthday—not for presents, but for someone who would truly see her,`, `who would make her feel special. That day, a person appeared out of nowhere with a warm smile, a quiet understanding, and a simple gift—a bracelet with a tiny star charm.`, `The person said, "For the girl who makes the stars jealous." It wasn’t the gift that made the day unforgettable, but the connection, the way she felt truly seen,`, `as if the universe had conspired to give her exactly what she needed: a reminder that sometimes,`, ` the most beautiful moments are the ones that make us feel like we’re shining brighter than ever. THE END`, `The point of this story is today is the birthday of a special girl, Zoya`]);

    const [index, setIndex] = useState(0)
    const [loop, setLoop] = useState(false)

    const handleClick = () => {
        if (index == 5) {
            navigate('/cake')
        }
        setIndex(index + 1)
    }

    return (
        <div className="bg-bday-theme1 opacity-50 h-screen w-screen z-[9999] flex flex-col gap-y-5 justify-center items-center">

            <h1 className='text-3xl font-mac text-center w-1/2 '>
                <motion.h1
                    key={messages[index]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: [0.17, 0.67, 0.83, 0.67], delay: 0.5 }}
                >
                    <TypeAnimation
                        style={{ whiteSpace: "pre-line", display: "block" }}
                        sequence={[
                            messages[index],
                            1000,
                        ]}
                        repeat={0}
                        speed={40}
                    />

                </motion.h1>
            </h1>

            <div className='absolute bottom-2 right-2'>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ from: 0, easeIn: [0.17, 0.67, 0.83, 0.67], delay: 0.5 }}
                    onClick={() => handleClick()} className="z-2 cursor-pointer rounded-3xl font-semibold overflow-hidden relative z-100 border border-bday-secondary group px-8 py-2">
                    <span className="relative z-10 text-bday-secondary group-hover:text-white text-xl duration-500">Next</span>
                    <span className="absolute w-full h-full bg-bday-secondary -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span className="absolute w-full h-full bg-bday-secondary -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </motion.button>

            </div>

            <div >
                <LottiePlayer
                    animationData={animationData1}
                    loop={false}
                    autoplay={true}
                    width={200}
                    height={200}
                    classNames={'absolute -top-0'}
                />
            </div>
            <div className='h-[5rem] w-[5rem]'>
                <LottiePlayer
                    animationData={animationData1}
                    loop={false}
                    autoplay={true}
                    width={10}
                    height={10}
                    classNames={'absolute z-[-1] -bottom-0 -left-[10%]'}
                />
            </div>

        </div>
    );
};

export default Page2;