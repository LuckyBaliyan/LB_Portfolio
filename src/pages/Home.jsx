import React, { useRef, useState, useEffect } from 'react'
import Nav from '../components/header/Nav';
import Footer from '../components/footer/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Home = () => {
  const loaderRef = useRef(null);
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
      gsap.to(loaderRef.current, {
        y: '-100%',
        transformOrigin: 'top',
        duration: 1,
        ease: 'power4.out',
        delay: 0.5,
        onComplete: () => {
          if (loaderRef.current) loaderRef.current.style.display = 'none';
        }
      });
    }
  }, [isLoaded]);


  return (
    <>
      <div ref={loaderRef} aria-hidden = 'true' className='fixed top-0 left-0 bg-[#121212] 
      z-[999] w-full h-screen pointer-events-none'>
      </div>
      <nav aria-label='Main navigation'>
          <Nav/>
      </nav>
      <section className='relative'>
        <div className='flex flex-col mt-25 ml-4 w-[85%] sm:hidden md:flex'>
          <div className='mask relative'>
            <h1 className='w-full p-2 whitespace-nowrap z-[100]'>Creative web  <img src="images/Emoji.webp" alt="" 
            className='inline-block w-[clamp(40px,8vw,120px)] aspect-square 
            z-[1] -translate-x-12'/></h1>
          </div>
          <div className='mask ml-12'>
            <h2 className='w-full text-right pb-2 pr-0'>Developer</h2>
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