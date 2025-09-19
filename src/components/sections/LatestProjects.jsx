import React, { useRef } from 'react'
import TextUP from '../../animations/Reavel/TextUP'
import SplitText from '../../animations/splitText/SplitText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const LatestProjects = () => {

    const containerRef = useRef(null);

    useGSAP(()=>{

    const cntx = gsap.context(()=>{
        
    gsap.to('.reveal-char',{
        y:0,
        ease:"power2.inOut",
        stagger:0.1,
        scrollTrigger:{
            trigger:'.latest',
            start:'top bottom',
            end:'bottom top',
            scrub:2,
        }
      })
    },containerRef)

    return ()=> cntx.revert();

    },[])

  return (
    <div ref={containerRef} className='pt-16'>
        <div className='flex justify-center items-center text-[var(--textWhite)]'>
            <h2 className='mask text-[var(--textWhite)] font-["zentry"] tracking-normal'><SplitText text={"Latest"}/></h2>
        </div>
        <div className='flex justify-center items-center text-[var(--textWhite)]'>
            <h1 className='mask text-[var(--textWhite)] font-["zentry"] tracking-normal'><SplitText text={"Works"}/></h1>
        </div>
    </div>
  )
}

export default LatestProjects