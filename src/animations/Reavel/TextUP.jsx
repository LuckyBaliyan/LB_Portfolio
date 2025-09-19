import { useGSAP } from '@gsap/react'
import React,{useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitText from '../splitText/SplitText';

gsap.registerPlugin(ScrollTrigger);

const TextUP = ({text,secText}) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to('.reveal-char', {
        y: "-100%",
        ease: 'power2.out',
        stagger: 0.005,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 2,
        },
      });
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div className='text-up' ref={containerRef}>
     <div className='flex flex-col  relative leading-[1] mask'>
     <h1 className='uppercase translate-y-[0%] will-change-transform  text-5xl md:text-8xl lg:text-[12rem] !font-["zentry"] tracking-normal text-[var(--HeadingsText)] !font-[700]'>
           <SplitText text={text}/>
     </h1> 
     <h1 className='uppercase translate-y-[0%] will-change-transform absolute top-[100%] left-0 text-5xl md:text-8xl lg:text-[12rem] !font-["zentry"] tracking-normal text-[var(--HeadingsText)] !font-[700]'>
           <SplitText text={text}/>
     </h1>
     </div> 
     <div className='flex flex-col  leading-[1] relative  mask'>
     <h1 className='uppercase translate-y-[0%] will-change-transform  text-5xl md:text-8xl lg:text-[12rem] !font-["zentry"] tracking-normal text-[var(--HeadingsText)] !font-[700]'>
            <SplitText text={secText}/>
     </h1> 
     <h1 className='uppercase translate-y-[0%] will-change-transform absolute top-[100%] left-0  text-5xl md:text-8xl lg:text-[12rem] !font-["zentry"] tracking-normal text-[var(--HeadingsText)] !font-[700]'>
           <SplitText text={secText}/>
     </h1>
     </div> 
    </div>
  )
}

export default TextUP