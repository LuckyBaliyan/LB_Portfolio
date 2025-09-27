import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import React,{useRef} from 'react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const revealRef = useRef(null);
  const imagesRef = useRef([]);

  useGSAP(() => {
  
    gsap.set(imagesRef.current, { scale: 0, opacity: 0 });
    gsap.set(revealRef.current, { y: 100, opacity: 0 });

    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: revealRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 1, 
      }
    });

 
    tl.to(revealRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    });

    
    tl.to(imagesRef.current[0], {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.15
    }, "<+=0.1");

    tl.to(imagesRef.current[1], {
      scale: 1,
      rotate:-25,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.15
    }, "<+=0.1");

  }, []);

  return (
    <div className='w-full h-full text-5xl bg-[#121212]'>
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center gap-4 mask py-4'>
          <h1
            ref={revealRef}
            className='text-[var(--textWhite)] text-center uppercase'
          >
            Let's Work <br /> 
            T
            <img
              ref={el => imagesRef.current[0] = el}
              src='images/my1.jpg'
              alt=''
              className='lg:w-24 w-8 md:w-16 aspect-square inline-block rounded-full object-cover'
            />
            gether
          </h1>

          <div  ref={el => imagesRef.current[1] = el} className='w-18 lg:w-24 aspect-square rounded-full cursor-pointer bg-[var(--accent)] p-4'>
            <img
              src="images/arrow.svg"
              alt=""
              className='object-cover'
            />
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Footer;
