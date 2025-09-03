import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';

const Reavel = (ref,options={}) => {
  useGSAP(()=>{
    if(!ref?.current) return;
    const chars = ref.current.querySelectorAll('.reveal-char');
    if(chars.length){
    gsap.to(chars,{
      y:0,
      ease:options.ease || 'power2.out',
      duration:options.duration || 0.4,
      stagger:options.stagger || 0.03,
      delay:options.delay || 0,
    });
    }

    const lines = ref.current.querySelectorAll('.reveal-line');
    if(lines.length){
      gsap.to(lines,{
      y:0,
      ease:options.ease || 'power2.out',
      duration:options.duration || 0.4,
      stagger:options.stagger || 0.03,
      delay:options.delay || 0,
    });
    }

    const img = ref.current;
    if(img){
      gsap.to(img,{
      scale:1,
      duration: options.imgDuration || 1,
      transformOrigin:options.origin || 'bottom',
      ease: options.imgEase || 'power2.out',
      delay: options.imgDelay || options.delay || 0,
      })
    }
  },[ref]);
}

export default Reavel