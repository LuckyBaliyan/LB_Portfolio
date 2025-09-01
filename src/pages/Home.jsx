import React, { useRef, useState, useEffect } from 'react'
import Nav from '../components/header/Nav';
import Footer from '../components/footer/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from '../animations/splitText/SplitText.jsx';
import Reavel from '../animations/Reavel/Reavel.js';

const Home = () => {
  const loaderRef = useRef(null);
  const headingRef = useRef(null);
  const semiHeadingRef = useRef(null);
  const [isLoaded,setIsLoaded] = useState(true);
 
  useEffect(() => {
    const handleLoaded = () => setIsLoaded(true);

    const mediaElements = [
      ...Array.from(document.images),
      ...Array.from(document.querySelectorAll('video'))
    ];
    const total = mediaElements.length;

    // Check if there are any custom fonts
    const hasFonts = document.fonts && document.fonts.size > 0;

    if (total === 0 && !hasFonts) {
      // No images, no videos, no fonts: animate immediately
      setIsLoaded(true);
    } else if (total === 0 && hasFonts) {
      // Only fonts to wait for
      document.fonts.ready.then(handleLoaded);
    } else {
      // Wait for all media, then fonts if present
      let loadedCount = 0;
      mediaElements.forEach(el => {
        if ((el.complete && el.naturalHeight !== 0) || el.readyState === 4) {
          loadedCount++;
          if (loadedCount === total) {
            if (hasFonts) {
              document.fonts.ready.then(handleLoaded);
            } else {
              handleLoaded();
            }
          }
        } else {
          el.addEventListener('load', () => {
            loadedCount++;
            if (loadedCount === total) {
              if (hasFonts) {
                document.fonts.ready.then(handleLoaded);
              } else {
                handleLoaded();
              }
            }
          });
          el.addEventListener('error', () => {
            loadedCount++;
            if (loadedCount === total) {
              if (hasFonts) {
                document.fonts.ready.then(handleLoaded);
              } else {
                handleLoaded();
              }
            }
          });
        }
      });
    }
  }, []);

  useGSAP(() => {
    if (isLoaded) {
      const tl = gsap.timeline({});
      tl.to(loaderRef.current, {
        y: '-100%',
        transformOrigin: 'top',
        duration: 1.3,
        ease: 'power4.out',
        delay: 0.5,
        onComplete: () => {
          if (loaderRef.current) loaderRef.current.style.display = 'none';
        }
      });

      tl.to('.slide-up',{
        y:0,
        ease:'sine.out',
        duration:0.8,
        stagger:0.1,
        onComplete:()=>{
          gsap.to('.anim',{opacity:1,duration:1,delay:1,ease:'sine.out'})
        }
      })
    }
  }, [isLoaded]);


  Reavel(headingRef,{delay:1,stagger:0.06,});


  return (
    <>
      <div ref={loaderRef} aria-hidden = 'true' className='fixed top-0 left-0 bg-[#121212] 
      z-[999] w-full h-screen pointer-events-none'>
      </div>
      <Nav/>
      <section className='relative'>
        <div ref={headingRef} className='flex flex-col mt-10 ml-4 w-[85%] sm:hidden md:flex'>
          <div className='mask relative'>
            <h1 className='w-full p-2 whitespace-nowrap z-[100]'>
              <SplitText text='Creative web' /> 
              <img src="images/Emoji.webp" alt="" 
            className='inline-block w-[clamp(40px,8vw,120px)] opacity-0 aspect-square 
            z-[1] md:-translate-x-6 lg:-translate-x-10 anim'/></h1>
          </div>
          <div  className='mask ml-12'>
            <h2 className='w-full text-right pb-2 pr-3'>
              <SplitText text='Developer' />
            </h2>
          </div>
        </div>
      </section>
      <footer aria-label='Footer'>
      <Footer/>
      </footer>
    </>
  )
}

export default Home;