import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const horizontalSections = sectionsRef.current;

    horizontalSections.forEach((sec) => {
      const thisPinWrap = sec.querySelector('.pin-wrap');
      const thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

      const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

      gsap.fromTo(thisAnimWrap, {
        x: 0,
      }, {
        x: getToValue(),
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'center center',
          end: () => `+=${thisAnimWrap.scrollWidth - window.innerWidth}`,
          pin: thisPinWrap,
          scrub: true,
          invalidateOnRefresh: true,
        }
      });
    });
  }, []);

  const renderItems = () => {
    return Array.from({ length: 10 }, (_, index) => (
      <div className="item min-w-[300px] flex items-center justify-center p-10 border-r border-gray-200" key={index}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </div>
    ));
  };

  return (
    <div>
      {/* Horizontal Section 1 */}
      <section className="horizontal h-[100vh] overflow-hidden" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="pin-wrap">
          <div className="animation-wrap flex to-right">
            {renderItems()}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HorizontalScroll;
