// src/Popup.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Popup = ({ text }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    // GSAP animation to pop up the text
    gsap.fromTo(
      popupRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 10, ease: 'power1.out' }
    );
  }, []);

  return (
    <p
      ref={popupRef}
      className=' bg-gradient-to-r from-[#efeff1]  to-[#cfcff0]  bg-clip-text text-transparent'
      style={{
        padding: '20px',
        borderRadius: '10px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,

      }}
    >
      {text}
    </p>
  );
};

export default Popup;
