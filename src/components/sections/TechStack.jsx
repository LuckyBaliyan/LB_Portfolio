import React, { useRef,useEffect,useState } from 'react'
import TextUP from '../../animations/Reavel/TextUP'
import { stacks } from '../../context/data';
import SkillsCard from '../cards/SkillsCard';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);


function splitData(arr){
      const size = Math.ceil(arr.length / 3);
      return [arr.slice(0,size),arr.slice(size,size*2),arr.slice(size*2)];
}

const TechStack = () => {

    
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768); 
  handleResize(); 
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

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
    
    const slidesRef = useRef([]);
    const mainContainerRef = useRef(null);

    console.log(slidesRef.current);

    useGSAP(() => {
  const context = gsap.context(() => {

    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        slidesRef.current.forEach((slide, i) => {
          gsap.to(slide, {
            y: i % 2 === 0 ? "-30%" : "50%",
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: mainContainerRef.current,
              start: "top top",
              end: "top bottom",
              scrub: 2,
              pin: true,
            },
          });
        });
      },

      // For tablets and mobiles (<1024px)
      "(min-width: 768px) and (max-width: 1023px)": () => {
        slidesRef.current.forEach((slide, i) => {
          gsap.to(slide, {
            x: i % 2 === 0 ? "-10%" : "10%",
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: mainContainerRef.current,
              start: "top top",
              end: "top bottom",
              scrub: 2,
              pin: true,
            },
          });
        });
      },
    });
  }, mainContainerRef);

  return () => context.revert();
  });

   const [slide1,slide2,slide3] = splitData(stacks);
   slidesRef.current = []; // reset on each render

   console.log(slide1,slide2,slide3);


  return (
    <div ref={mainContainerRef} className='w-full min-h-screen bg-[#121212] px-4 md:px-6 pb-26 lg:pb-0 lg:px-16 pt-32 overflow-hidden relative'>
        <div className="fog absolute w-full h-[5%] left-0 top-0 z-[50] bg-[#121212] blur-2xl shadow-2xl shadow-[#121212]"></div>
        <div className="fog absolute w-full h-[10%] left-0 bottom-0 z-[50] bg-[#121212] blur-2xl shadow shadow-[#121212]"></div>
        <div className='flex w-full flex-col items-center gap-6 lg:items-start  lg:flex-row justify-between'>
            <div className='flex flex-col items-center lg:items-start gap-4 lg:gap-2'>
                <TextUP text={"My"} secText={"Stack"} color={'--textWhite'}/>
                <p className='text-[var(--textWhite)] text-center md:text-2xl lg:text-base lg:text-start w-full lg:w-[45%] leading-tight'>
                    These are the tools I harnessed to bring ideas to life and craft solutions that are both functional and visually striking.
                     Each technology empowered me to build smarter, faster, and cooler projects. 
                </p>
            </div>
            <div className='stack-container lg:rotate-15  lg:mt-32 relative'>
                <div className='slide-container  lg:translate-x-[-10%] flex flex-col lg:flex-row gap-2'>
                    {[slide1,slide2,...(isMobile?[]:[slide3])].map((slide,index)=>(
                        <div ref={(el)=>{
                                    if(el) slidesRef.current.push(el)
                                    }}  key={index} className={`grid grid-cols-2 py-2 gap-2  md:flex md:flex-nowrap lg:flex-col max-h-screen  
                        slide lg:${index % 2===0?'slideEven':'slideOdd'}`}>
                            {
                              slide.filter(
                                (skill)=>{
                                    const isMobile = window.innerWidth < 768;
                                    return isMobile ? (skill.name.toLowerCase().trim() !== 'java' && skill.id !== 17) : true;
                                }
                              ).map(skill=>(
                                <>
                                <div  
                                    key={skill.id} 
                                    className='slide-card'
                                >
                                    <SkillsCard text={skill.name} path={skill.img} col={skill.col}/>
                                </div>
                                </>
                              ))
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechStack