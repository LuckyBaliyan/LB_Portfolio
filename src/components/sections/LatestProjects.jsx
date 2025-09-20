import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { latest } from '../../context/data';
import TextUP from '../../animations/Reavel/TextUP';

gsap.registerPlugin(ScrollTrigger); 

const LatestProjects = () => {
  const containerRef = useRef(null);

 
  //Most essential ScrollTrigger setUp in react
  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);


  useGSAP(() => {
    const ctx = gsap.context(() => {
      const banners = containerRef.current.querySelectorAll('.banner');
      const letters = containerRef.current.querySelectorAll(".split span");
      const images = containerRef.current.querySelectorAll(".img-mask");

      gsap.set(letters, { y: "125%" });
      gsap.set(images, {
        clipPath: "polygon(25% 25%, 75% 40%,100% 100%,0% 100%)"
      });

      banners.forEach((item, i) => {
        const spanLetters = item.querySelectorAll('span');
        const bgImg = item.querySelector('.img-mask');

        ScrollTrigger.create({
          trigger: item,
          start: `top+=${i * 25 - 250} top`,
          end: `top+=${i * 25 - 100} top`,
          scrub: 1,
          animation: gsap.fromTo(spanLetters, {
            y: "125%",
          }, {
            y: 0,
            ease: 'none',
            stagger: 0.02,
          })
        });

     
        ScrollTrigger.create({
          trigger: item,
          start: 'top bottom',
          end: 'top top',
          scrub: 0.5,
          animation: gsap.fromTo(bgImg, {
            clipPath: 'polygon(25% 25%, 75% 40%,100% 100%,0% 100%)',
          }, {
            clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
            ease: 'none',
          })
        });

        ScrollTrigger.create({
          trigger: item,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: 0.5,
          animation: gsap.fromTo(bgImg, {
            clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
          }, {
            clipPath: 'polygon(0% 0%,100% 0%,75% 60%,25% 75%)',
            ease: 'none',
          })
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className='flex justify-center py-6'>
        <TextUP text={'Recent'} secText={'works'} color={'--textWhite'}/>
      </div>

      <div>
        {latest.map((item, index) => (
          <div key={index} className='banner'>
            <h1 className='split'>
              {item.Title.split('').map((char, i) => (
                <span className='down' key={i}>{char}</span>
              ))}
            </h1>
            <img src={item.img} alt={`Project ${item.Title}`} className='img-mask' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;


