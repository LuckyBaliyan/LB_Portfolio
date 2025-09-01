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
      ease:options.ease || 'power1.out',
      duration:options.duration || 0.4,
      stagger:options.stagger || 0.03,
      delay:options.delay || 0,
    });
    }

    const lines = ref.current.querySelectorAll('.reveal-lines');
    if(lines.length){
      gsap.to(lines,{
      y:0,
      ease:options.ease || 'power1.out',
      duration:options.duration || 0.4,
      stagger:options.stagger || 0.03,
      delay:options.delay || 0,
    });
    }
  },[ref]);
}

export default Reavel