import React, { useEffect, useRef } from 'react';
import { gsap, Flip, ScrollTrigger } from 'gsap/all';
import '../assets/css/animated.css'

gsap.registerPlugin(Flip, ScrollTrigger);
console.log(Flip)

const AnimatedComponent = () => {
  const boxRef = useRef(null);
  const secondMarkerRef = useRef(null);
  const thirdMarkerRef = useRef(null);
  const flipCtx = useRef(null);

  useEffect(() => {
    const createTimeline = () => {
      flipCtx.current && flipCtx.current.revert();

      flipCtx.current = gsap.context(() => {
        const secondState = Flip.getState(secondMarkerRef.current);
        const thirdState = Flip.getState(thirdMarkerRef.current);
        const flipConfig = {
          ease: 'none',
          duration: 1,
        };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: boxRef.current,
            start: 'clamp(top center)',
            endTrigger: '.spacer.final',
            end: 'clamp(top center)',
            scrub: 1,
          },
        });

        tl.add(Flip.fit(boxRef.current, secondState, flipConfig))
          .add(Flip.fit(boxRef.current, thirdState, flipConfig), '+=0.5');
      });
    };

    createTimeline();
    window.addEventListener('resize', createTimeline);

    return () => {
      window.removeEventListener('resize', createTimeline);
      flipCtx.current && flipCtx.current.revert();
    };
  }, []);

  return (
    <div className='h-[150rem]'>
      <div className="main">
        <div className="container initial">
          <div className="box bg-gray-400" ref={boxRef}></div>
        </div>
        <div className="container second">
          <div className="marker" ref={secondMarkerRef}></div>
        </div>
        <div className="container third">
          <div className="marker" ref={thirdMarkerRef}></div>
        </div>
      </div>
      <div className="spacer final"></div>
    </div>
  );
};

export default AnimatedComponent;
