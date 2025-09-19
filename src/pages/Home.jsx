import React, { useRef, useState, useEffect } from 'react'
import Nav from '../components/header/Nav';
import Footer from '../components/footer/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from '../animations/splitText/SplitText.jsx';
import Reavel from '../animations/Reavel/Reavel.js';
import {greetings} from '../context/data.js';
import { CardTilt } from '../components/features/CradTilt.jsx';
import SplitLine from '../animations/splitText/SplitLine.jsx';
import MainBtn from '../components/buttons/MainBtn.jsx';
import Menu from '../components/header/Menu.jsx';
import SlideUp from '../animations/pageTransition/SlideUp.jsx';
import Marquee from '../components/features/Marquee.jsx';
import Message from '../components/sections/Message.jsx';
import FlipCard from '../components/features/FlipCard.jsx';
import { flipCardAnimation } from '../animations/cards/flipCard.js';
import Expertise from '../components/sections/Expertise.jsx';

const Home = () => {
  const loaderRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const imgRef = useRef(null);
  const lineRef = useRef(null);
  const CopyRef = useRef(null);
  const SinceRef = useRef(null);
  const cardRef = useRef(null);

  
  useGSAP(() => {
    if (!loaderRef.current || !textRef.current) return;
    const tl = gsap.timeline( {onComplete: () => {
        gsap.to(loaderRef.current, {
          y: '-100%',
          duration: 1,
          ease: 'power4.inOut',
          onComplete: () => {
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

  //Animation for the flipCard
  flipCardAnimation(cardRef);
  
  return (
    <>
      {/**Loader */}
      <div
        ref={loaderRef}
        className="fixed top-0 left-0 bg-[#121212] z-[998] w-full h-screen flex items-center justify-center pointer-events-none"
      >
      <h4
        ref={textRef}
        className="text-white  font-medium mix-blend-difference greet"
      >
      <span>&#9679;</span> Welcome
      </h4>
      </div>
      {/** Landing Page */}
      <Nav delay={1.8}/>
      <div className="fixed top-2 right-4 opacity-100 pointer-events-auto z-[800]">
       <Menu />
      </div>
      <section className='relative'>
        <div ref={headingRef} className='flex-col translate-y-[100%] !z-40 md:translate-y-0 mt-24 md:mt-6  ml-4 w-[85%] pointer-events-none flex'>
          <div className='mask relative -ml-2 md:ml-0 z-40 mt-2'>
            <h1 className='w-full p-0 md:p-2  whitespace-normal md:whitespace-nowrap'>
              <SplitText text='Creative web' /> 
            </h1>
          </div>
          <div  className='mask md:ml-4 lg:ml-12 z-50'>
            <h2 className='w-full text-start z-[80] md:text-right pb-2 pr-3'>
              <SplitText text='Developer' />
            </h2>
          </div>
        </div>
        <div className="my-img scale-100 md:scale-70">
           <CardTilt  className='w-[20vh] h-[23vh] lg:w-[25vw] lg:h-[32vw] md:w-[30vw] md:h-[36vw]'>
            <div ref={imgRef} className="img-wrapper relative scale-0 overflow-hidden rounded-[6px]  w-full h-full">
            <img src="images/myImg.webp" alt="" className='last scale-110 grayscale-100'/>
            </div>
            </CardTilt>
            <div className="w-full mask py-2">
              <p ref={nameRef} className='anim-placeholder  uppercase tracking-tighter 
              font-extrabold whitespace-nowrap text-xl md:text-2xl lg:text-5xl pr-5'>
              &#9679; <SplitText text='Lucky Baliyan'/>
              </p>
            </div>
        </div>
        <div className="my-para overflow-hidden absolute top-[30%] left-0 md:absolute md:top-[55%] md:left-[60%] flex flex-col gap-2">
          <p ref={lineRef} className='leading-[1] md:leading-[1.08] w-2/3 md:w-[90%] px-2 text-sm lg:text-[16px] overflow-hidden'>
            <SplitLine text='I’m a Frontend Developer and UI Enthusiast who loves 
            crafting modern animated and user-friendly web experiences.' />
          </p>
          <div className='fade-in ml-2 md:ml-0'><MainBtn text={'See Works'} /></div>
        </div>
        <div className='w-fit md:w-full absolute bottom-12 -right-0 sm:bottom-[20%] sm:right-4  md:bottom-0 md:left-0 flex 
          flex-col md:flex-row justify-between md:pb-8 px-4'>
          <h5 ref={CopyRef} className='font-["satoshi-black"] text-xl sm:text-2xl md:text-4xl lg:text-6xl'>&copy;
            <SplitText text="2025"/>
          </h5>
          <p ref={SinceRef} className='font-["Neue_Montreal"] text-sm lg:text-xl self-end'>
            <SplitText text="/ Creating Since 2024" />
          </p>
        </div>
      </section>
      {/*Content Wrapper **/}
      <div className='hidden relative lg:block'>
      <SlideUp>
      <div className='relative w-full pt-24 z-20 marquee-cont'>
        <Marquee />
      <div className='hidden lg:block min-h-screen pt-32'>
        <Message />
      </div>
      </div>
      </SlideUp>
      </div>
      {/** Marquee for mobile */}
      <div className='w-full lg:hidden -mt-6 md:mt-24'>
           <div className='bg-[var(--black)] w-[110vw]'>
           <div className='marquee marquee-mobile'>
               <h2>
                   Building <img src="/images/star.avif" alt="" className='mobile-img'/> 
                   Interactive <img src="/images/star.avif" alt="" className='mobile-img'/> 
                   Web Experiences <img src="/images/star.avif" alt=""className='mobile-img' /> 
                   Creative Developer <img src="/images/star.avif" alt=""className='mobile-img' /> 
                   Building <img src="/images/star.avif" alt="" className='mobile-img'/> 
                   Interactive <img src="/images/star.avif" alt="" className='mobile-img'/>
                   Web Experiences <img src="/images/star.avif" alt="" className='mobile-img'/> 
                   Creative Developer
                  <img src="/images/star.avif" alt="" className='mobile-img'/> 
               </h2>
                <h2>
                   Building <img src="/images/star.avif" alt="" className='mobile-img'/> 
                   Interactive <img src="/images/star.avif" alt="" className='mobile-img' /> 
                   Web Experiences <img src="/images/star.avif" alt="" className='mobile-img'/> 
                    Creative Developer <img src="/images/star.avif" alt=""className='mobile-img' /> 
                   <img src="/images/star.avif" alt="" className='mobile-img'/> 
               </h2>
                <h2>
                   Building <img src="/images/star.avif" alt="" className='mobile-img'/> 
                   Interactive <img src="/images/star.avif" alt="" className='mobile-img' /> 
                   Web Experiences <img src="/images/star.avif" alt="" className='mobile-img'/> 
                    Creative Developer <img src="/images/star.avif" alt=""className='mobile-img' /> 
                   <img src="/images/star.avif" alt="" className='mobile-img'/> 
               </h2>
                <h2>
                   Building <img src="/images/star.avif" alt="" className='mobile-img'/> 
                   Interactive <img src="/images/star.avif" alt="" className='mobile-img' /> 
                   Web Experiences <img src="/images/star.avif" alt="" className='mobile-img'/> 
                    Creative Developer <img src="/images/star.avif" alt=""className='mobile-img' /> 
                   <img src="/images/star.avif" alt="" className='mobile-img'/> 
               </h2>
           </div>
        </div>
      </div>
      {/** Text animations for non laptop screens for optimizability*/}
      <div className='min-h-screen pt-16 md:pt-24 lg:hidden flex flex-col md:gap-4'>
        <div className="elem elem1">
        <h3 className='text-5xl md:text-8xl'>
          I Craft 
        </h3>
          <div className="relative img-cont border-dashed border-2 rounded-lg p-1 origin-center">
              <FlipCard cardRef={cardRef} frontImg='/images/M1 (2).webp' 
              backImg='/images/M2 (2).webp' className='w-full h-full object-cover'/>
          </div>
        </div>
        <div className="elem elem2">
          <h3 className='text-6xl md:text-8xl md:whitespace-nowrap text-center uppercase stroke-text'>
            The Next Gen
          </h3>
        </div>
        <div className="elem elem3 ml-3 sm:ml-0">
          <h3 className='text-6xl md:text-7xl text-center'>Digital Experiences</h3>
        </div>
        <div className="elem4 flex-col items-center gap-2 justify-center">
          <div className='flex gap-1 items-center justify-center'>
            <h3 className='text-3xl md:text-4xl text-center'>With</h3>
          <div className="rounded-full w-22 md:w-42 aspect-video overflow-hidden">
            <img src="/images/M3 (2).webp" alt="" />
          </div>
          </div>
           <h3 className=" text-6xl md:text-7xl relative mb-2 text-center">Passion
              <div className="w-3/4  h-[8px] bg-black absolute -bottom-2 left-1/2 translate-x-[-50%]"></div>
           </h3>
        </div>
      </div>

      {/*Expertise Section */}

      <section>
          <Expertise />
      </section>
   </>
  )
}

export default Home;