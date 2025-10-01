import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { allProjects, latest } from '../../context/data';
import TextUP from '../../animations/Reavel/TextUP';
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import ProjectsBtn from '../buttons/ProjectsBtn';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger); 

const LatestProjects = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

 
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
        const inDiv = item.querySelectorAll('.in');

        gsap.set(inDiv,{opacity:0});

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
            stagger: 0.08,
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

       ScrollTrigger.create({
        trigger: item,
        start: "top center", 
        onEnter: () => gsap.to(inDiv, { opacity: 1, duration: 0.5, ease: "power2.out" }),
        onLeaveBack: () => gsap.to(inDiv, { opacity: 0, duration: 0.5, ease: "power2.out" }),
       });

       ScrollTrigger.create({
        trigger: item,
        start: "bottom 80%",
        onEnter: () => gsap.to(inDiv, { opacity: 0, duration: 0.5, ease: "power2.out" }),
        onLeaveBack: () => gsap.to(inDiv, { opacity: 1, duration: 0.5, ease: "power2.out" }),
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
        {allProjects.slice(0,5).map((item, index) => (
          <div key={index} className='banner'>
            <h1 className={`split italic px-8 py-2 ${index === (latest.length - 1)?'!text-[#121212]':''}`}>
              {item.Title.split('').map((char, i) => (
                <span className='down' key={i}>{char}</span>
              ))}
            </h1>
            <img src={item.img} alt={`Project ${item.Title}`} className={`img-mask ${index === 2?'object-top':'object-cover'}`} />
            <div className='para absolute top-[55%] md:top-[60%] left-1/2 -translate-x-1/2 flex items-center justify-center'>
                <p className='text-white md:text-xl lg:w-[75%] text-center leading-tight'>{item.para}</p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between in gap-1  items-center absolute bottom-[10%] left-[5%] w-[90%]'>
               <div className='flex gap-2'>
                {item.link &&
                   <ProjectsBtn link={item.link} text="Visit" icon={<CiGlobe />} />
                }
                   <ProjectsBtn link={item.github} text="GitHub" icon={<FaGithub />} />
               </div>
               <div onClick={()=> navigate(`/project/${item.id}`)} className='flex gap-1 cursor-pointer hover:scale-110 transition  items-center'>
                <p className='mix-blend-difference text-white  underline text-2xl font-extrabold'>View Project</p>
                <FaArrowRight className='text-white mix-blend-difference underline text-2xl font-extrabold -rotate-45'/>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;


