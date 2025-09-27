import React, { Children, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const SlideDown = ({className = '',children}) => {
    const slideRef = useRef(null);

    useGSAP(()=>{
      gsap.to(slideRef.current,{
        yPercent:50,
        ease:'none',
        scrollTrigger:{
            trigger:slideRef.current,
            start:'top bottom',
            end:'top top',
            scrub:true,
        }
      })
    },[]);

  return (
    <div ref={slideRef} className={className}>
        {children}
    </div>
  )
}

export default SlideDown;