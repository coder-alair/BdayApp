import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'; // Make sure to install and import the necessary plugins
 // Import your CSS here

gsap.registerPlugin(TextPlugin);

const AnimatedText = ({ text }) => {
    const containerRef = React.useRef(null);
    const sentenceEndExp = /(\.|\?|!)$/g;
  
    useEffect(() => {
      let words = text.split(" ");
      let tl = gsap.timeline({ delay: 0.6, repeat: 2, repeatDelay: 4 });
      let time = 0;
  
      words.forEach((word) => {
        let isSentenceEnd = sentenceEndExp.test(word);
        let element = document.createElement('span'); // Use span for inline display
        element.innerText = word + " "; // Add space for separation
        containerRef.current.appendChild(element);
  
        let duration = Math.max(0.5, word.length * 0.08);
        let fadeDuration = 0.5; // Duration for fade in/out
        let totalDuration = duration + fadeDuration;
  
        gsap.set(element, { autoAlpha: 0, scale: 0 });
  
        // Animate the current word
        tl.to(element, fadeDuration, { autoAlpha: 1, scale: 1.2, ease: "power1.out" }, time) // Fade in
          .to(element, fadeDuration, { autoAlpha: 0, scale: 1, ease: "power1.in" }, time + duration) // Fade out
  
        // Update the time for the next word
        time += totalDuration; // Move to the next word
      });
  
      // Cleanup function to remove elements
      return () => {
        containerRef.current.innerHTML = '';
      };
    }, [text]);
  
    return (
      <div id="demo" ref={containerRef} className="flex justify-center items-center text-center">
        {/* Additional UI elements can be added here */}
      </div>
    );
  };
  

export default AnimatedText;