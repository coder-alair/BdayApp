import React, { useState } from 'react';
import Section from '../components/Section'
import Rose1 from '../assets/svg/rose1.svg'
import Rose2 from '../assets/svg/rose2.svg'
import Rose3 from '../assets/svg/rose3.svg'
import Rose4 from '../assets/svg/rose4.svg'

const Page4 = () => {

    return (
        <div className='text-center bg-red-300'>
            <Section classNames='w-full relative flex justify-center  rounded-lg'>
                <div className='py-3 px-4 bg-white flex flex-col gap-y-4 justify-center items-center border rounded-xl rounded-tr-[4rem] rounded-bl-[4rem] h-full w-[20rem]'>
                    <p className='text-xl'>
                        To my beautiful daughter, watching you grow into the incredible person you are today has been the greatest gift of my life. I’m so proud of you, and I’ll always be here to support you. Happy Birthday, sweetheart!
                    </p>
                    <img src={Rose1} className='absolute h-12 w-12 top-16' />
                    <p>-From Dad</p>
                </div>
            </Section>

            <Section classNames='w-full relative flex justify-center  rounded-lg'>
                <div className='py-3 px-4 bg-white flex flex-col gap-y-4 justify-center items-center border rounded-xl rounded-tr-[4rem] rounded-bl-[4rem] h-full w-[20rem]'>
                    <p className='text-xl'>
                    Happy Birthday, my dear girl! You are a gift to this world, and I’m so grateful that I get to be your mother. Thank you for filling my life with so much love and happiness.                    </p>
                    <img src={Rose2} className='absolute h-12 w-12 top-16' />
                    <p>-From Mom</p>
                </div>
            </Section>

            <Section classNames='w-full relative flex justify-center  rounded-lg'>
                <div className='py-3 px-4 bg-white flex flex-col gap-y-4 justify-center items-center border rounded-xl rounded-tr-[4rem] rounded-bl-[4rem] h-full w-[20rem]'>
                    <p className='text-xl'>
                    To my favorite sister: You make everything better, and I’m glad you’re my big sister. Hope your birthday is full of cake, presents, and all the fun you deserve!                    </p>
                    <img src={Rose3} className='absolute h-12 w-12 top-16' />
                    <p>-From Lil Bro's</p>
                </div>
            </Section>

            <Section classNames='w-full relative flex justify-center  rounded-lg'>
                <div className='py-3 px-4 bg-white flex flex-col gap-y-4 justify-center items-center border rounded-xl rounded-tr-[4rem] rounded-bl-[4rem] h-full w-[20rem]'>
                    <p className='text-xl'>
                    On your special day, I just want to remind you how incredibly lucky I am to call you mine. You are my greatest adventure, and the reason I wake up smiling every day. Happy Birthday!                    </p>
                    <img src={Rose4} className='absolute h-12 w-12 top-16' />
                    <p></p>
                </div>
            </Section>
        </div>
    );
};

export default Page4;