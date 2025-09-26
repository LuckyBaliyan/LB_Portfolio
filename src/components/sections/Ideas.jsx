import React,{useRef,useEffect} from 'react'
import SlideUp from '../../animations/pageTransition/SlideUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Ideas = () => {
    const wordRef = useRef(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const rightRef = useRef(null);

    //bhai always use it ....
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

    useGSAP(()=>{
       gsap.to(wordRef.current,{
        x:800,
        ease:'power3.inOut',
        scrollTrigger:{
            trigger:wordRef.current,
            start:'top bottom',
            end:'bottom top',
            scrub:true,
        }
       });

       gsap.set(imageRef.current,{clipPath:'polygon(0 0, 100% 0, 100% 0, 0 0)',scale:1.2})

        gsap.to(imageRef.current,{
            clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            scale:1,
            ease:'power3.inOut',
            duration:0.1,
            scrollTrigger:{
                trigger:imageRef.current,
                start:'top bottom',
                end: "bottom +=1000",
                scrub: 5,
                toggleActions: "play none none none",
                once: true,
            }
        });

        gsap.matchMedia().add("(max-width: 768px)", () => {
        gsap.to(rightRef.current,{
            x:0,
            ease:'power3.inOut',
            scrollTrigger:{
                trigger:rightRef.current,
                start:'top bottom',
                end:'bottom top',
                scrub:true,
            }
        })
        });

    },[])

  return (
    <div className='py-32 bg-white rounded-t-4xl'>
         <div className='flex w-full gap-0 px-4'>
            <h4>(Ideas &nbsp;</h4>
            <h4 ref={wordRef}>in Motion)</h4>
        </div>
        <div ref={containerRef} className='w-full relative overflow-hidden h-screen mt-6'>
            <img ref={imageRef} src="images/idea3.webp" alt="" className='w-full h-full'/>
        </div>
        <h4 ref={rightRef} className='md:hidden translate-x-[100%]'>in Motion)</h4>
    </div>
  )
}

export default Ideas;