import React, { useState } from 'react';
import Section from '../components/Section'
import Rose1 from '../assets/svg/rose1.svg'
import Rose2 from '../assets/svg/rose2.svg'
import Rose3 from '../assets/svg/rose3.svg'
import Rose4 from '../assets/svg/rose4.svg'
import LottiePlayer from '../components/LottiePlayer';
import animationData1 from '../assets/lottie/two_person.json'
import animationData2 from '../assets/lottie/singsong2.json'
import animationData3 from '../assets/lottie/gift1.json'


const Page4 = () => {

    return (
        <div className='text-center relative'>
            <Section classNames='w-full z-[9999] relative flex justify-center  rounded-lg'>
                <div className='py-3 px-4 bg-white flex flex-col gap-y-4 justify-center items-center border rounded-xl rounded-tr-[4rem] rounded-bl-[4rem] h-[30rem] w-[20rem]'>
                    <p className='text-xl'>
                        To my beautiful daughter, watching you grow into the incredible person you are today has been the greatest gift of my life. I’m so proud of you, and I’ll always be here to support you. Happy Birthday, sweetheart!
                    </p>
                    <img src={Rose1} className='absolute h-12 w-12 top-16' />
                    <p>-From Dad</p>
                </div>
            </Section>

            <Section classNames='w-full  z-[9999] relative flex justify-center  rounded-lg'>
                <div className='py-3 px-4 bg-white flex flex-col gap-y-4 justify-center items-center border rounded-xl rounded-tr-[4rem] rounded-bl-[4rem] h-[30rem] w-[20rem]'>
                    <p className='text-xl'>
                    Happy Birthday, my dear girl! You are a gift to this world, and I’m so grateful that I get to be your mother. Thank you for filling my life with so much love and happiness.                    </p>
                    <img src={Rose2} className='absolute h-12 w-12 top-16' />
                    <p>-From Mom</p>
                </div>
            </Section>

            <Section classNames='w-full  z-[9999] relative flex justify-center  rounded-lg'>
                <div className='py-3 px-4 bg-white flex flex-col gap-y-4 justify-center items-center border rounded-xl rounded-tr-[4rem] rounded-bl-[4rem] h-[30rem] w-[20rem]'>
                    <p className='text-xl'>
                    To my favorite sister: You make everything better, and I’m glad you’re my big sister. Hope your birthday is full of cake, presents, and all the fun you deserve!                    </p>
                    <img src={Rose3} className='absolute h-12 w-12 top-16' />
                    <p>-From Lil Bro's</p>
                </div>
            </Section>

            <Section classNames='w-full  z-[9999] relative flex justify-center  rounded-lg'>
                <div className='py-3 px-4 bg-white flex flex-col gap-y-4 justify-center items-center border rounded-xl rounded-tr-[4rem] rounded-bl-[4rem] h-[30rem] w-[20rem]'>
                    <p className='text-xl'>
                    On your special day, I just want to remind you how incredibly lucky I am to call you mine. You are my greatest adventure, and the reason I wake up smiling every day. Happy Birthday!                    </p>
                    <img src={Rose4} className='absolute h-12 w-12 top-16' />
                    <p></p>
                </div>
            </Section>
            <div className='z-[-3]'>
                <LottiePlayer
                    animationData={animationData1}
                    loop={false}
                    autoplay={true}
                    width={400}
                    height={400}
                    classNames={'absolute -z-3 top-[18%]'}
                />
            </div>
            <div className='z-[-3]'>
                <LottiePlayer
                    animationData={animationData2}
                    loop={true}
                    autoplay={true}
                    width={400}
                    height={400}
                    classNames={'absolute -z-3 top-[42%]'}
                />
            </div>
            <div className='z-[-3]'>
                <LottiePlayer
                    animationData={animationData3}
                    loop={true}
                    autoplay={true}
                    width={400}
                    height={400}
                    classNames={'absolute -z-3 top-[71%]'}
                />
            </div>
        </div>
    );
};

export default Page4;