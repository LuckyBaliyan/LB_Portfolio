import React, { useRef, useState, useEffect } from 'react'
import Nav from '../components/header/Nav';
import Footer from '../components/footer/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from '../animations/splitText/SplitText.jsx';
import Reavel from '../animations/Reavel/Reavel.js';
import greetings from '../context/data.js';
import { CardTilt } from '../components/features/CradTilt.jsx';
import SplitLine from '../animations/splitText/SplitLine.jsx';
import MainBtn from '../components/buttons/MainBtn.jsx';
import Menu from '../components/header/Menu.jsx';

const Home = () => {
  const loaderRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const imgRef = useRef(null);
  const lineRef = useRef(null);
  const CopyRef = useRef(null);
  const SinceRef = useRef(null);

  
  useGSAP(() => {
    if (!loaderRef.current || !textRef.current) return;
    const tl = gsap.timeline( {onComplete: () => {
        // Animate loader out after greetings
        gsap.to(loaderRef.current, {
          y: '-100%',
          duration: 1,
          ease: 'power4.inOut',
          onComplete: () => {
            gsap.to('.anim',{opacity:1,duration:1,delay:0.8});
            gsap.to('.last',{scale:1,delay:0,duration:0.5,ease:'power2.inOut'});
            gsap.to('.fade-in',{opacity:1,delay:0,duration:0.5,ease:'power2.inOut'});
          }
        });
      }});

    greetings.forEach((word) => {
      tl.to({}, {
        duration: 0.06,
        onComplete: () => {
          textRef.current.innerText = word;
        },
        ease: "power2.inOut"
      }).to({}, { duration: 0.06 }); 
    });
  }, []);

  Reavel(headingRef,{delay:1.5,stagger:0.06,});
  Reavel(nameRef,{delay:1.5,stagger:0.06,});
  Reavel(imgRef,{delay:1.65});
  Reavel(lineRef,{delay:1.5,stagger:0.1});
  Reavel(CopyRef,{delay:1.5,stagger:0.06,});
  Reavel(SinceRef,{delay:1.5,stagger:0.06,});
  
  return (
    <>
      {/**cLoader */}
      <div
        ref={loaderRef}
        className="fixed top-0 left-0 bg-[#121212] z-[999] w-full h-screen flex items-center justify-center pointer-events-none"
      >
      <h4
        ref={textRef}
        className="text-white  font-medium mix-blend-difference greet"
      >
        <span>&#9679;</span> Welcome
      </h4>
      </div>
      {/** Main Content */}
      <Nav delay={1.8}/>
      <section className='relative'>
        <div ref={headingRef} className='flex-col md:mt-14 lg:mt-4 ml-4 w-[85%] pointer-events-none hidden md:flex'>
          <div className='mask relative z-40 mt-2'>
            <h1 className='w-full p-2 whitespace-nowrap'>
              <SplitText text='Creative web' /> 
              <img src="images/Emoji.webp" alt="" 
            className='inline-block w-[clamp(40px,8vw,120px)] opacity-0 aspect-square 
            z-[1] md:-translate-x-6 lg:-translate-x-10 anim'/>
            </h1>
          </div>
          <div  className='mask md:ml-4 lg:ml-12 z-30'>
            <h2 className='w-full text-right pb-2 pr-3'>
              <SplitText text='Developer' />
            </h2>
          </div>
        </div>
        <div  className="my-img">
           <CardTilt  className='w-[20vh] h-[25vh] lg:w-[25vw] lg:h-[32vw] md:w-[30vw] md:h-[36vw]'>
            <div ref={imgRef} className="img-wrapper relative overflow-hidden rounded-[6px]  w-full h-full">
            <img src="images/my.webp" alt=""className='last scale-115'/>
            <div className="mask-overlay"></div>
            </div>
            </CardTilt>
            <div className="w-full mask py-2">
              <p ref={nameRef} className='anim-placeholder  uppercase tracking-tighter 
              font-extrabold whitespace-nowrap md:text-2xl lg:text-5xl pr-5'>
              &#9679; <SplitText text='Lucky Baliyan'/>
              </p>
            </div>
        </div>
        <div className="my-para overflow-hidden absolute top-[30%] left-0 md:absolute md:top-[55%] md:left-[60%] flex flex-col gap-2">
          <p ref={lineRef} className='leading-[1.08] w-2/3 md:w-full px-2 text-sm lg:text-[18px] overflow-hidden'>
            <SplitLine text='I’m a Frontend Developer and UI Enthusiast who loves 
            crafting modern animated and user-friendly web experiences.  
            From hackathons to real-world projects, I bring ideas alive with
            clean code and creative design.' />
          </p>
          <div className='fade-in ml-2'><MainBtn text={'See Works'} /></div>
        </div>
        <div className='w-fit  md:w-full absolute bottom-4 right-0 pb-25 md:bottom-0 md:left-0 flex flex-col md:flex-row justify-between md:pb-8 px-4'>
          <h5 ref={CopyRef} className='font-["satoshi-black"] text-4xl lg:text-6xl'>&copy;
            <SplitText text="2025"/>
          </h5>
          <p ref={SinceRef} className='font-["Neue_Montreal"] text-sm lg:text-xl self-end'>
            <SplitText text="/ Creating Since 2023" />
          </p>
        </div>
      </section>
      <footer aria-label='Footer'>
      <Footer/>
      </footer>
    </>
  )
}

export default Home;