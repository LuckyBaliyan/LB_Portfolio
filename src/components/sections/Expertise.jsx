import React, { useEffect, useRef, useState } from 'react'
import { expertise } from '../../context/data'
import gsap from 'gsap';
import TextUP from '../../animations/Reavel/TextUP';

const Expertise = () => {
    const btnRefs = useRef([]);
    const [openIndex,setOpenIndex] = useState(null);

    //Logic to the info section
    useEffect(()=>{
      expertise.forEach((_,i)=>{
        gsap.set(`.info-${i}`,{height:0,overflow:'hidden',});
      })
    },[expertise]);

    //Animation based on passed prop bade bhai
    const toggleInfo = (index,btnRef) =>{
        const info = document.querySelector(`.info-${index}`);
        const Ref = btnRefs.current[index];

        if(openIndex === index){
            gsap.to(info,{
                height:0,
                duration:0.6,
                ease:'power2.inOut',
            })

            gsap.to(Ref,{
                rotate:0,
                duration:0.6,
                ease:'power2.inOut',
            })

           setOpenIndex(null);
        }
        else{
            //If any other info is open close it
            if(openIndex !== null){
              const openInfo = document.querySelector(`.info-${openIndex}`);
              const openRef = btnRefs.current[openIndex];

              gsap.to(openInfo,{
                    height:0,
                    duration:0.6,
                    ease:'power2.inOut',
                });

              gsap.to(openRef,{
                    rotate:0,
                    duration:0.6,
                    ease:'power2.inOut',
                });
            }

            gsap.to(info,{
                height:"auto",
                duration:0.6,
                ease:'power2.inOut',
            })

            gsap.to(Ref,{
                rotate:180,
                duration:0.6,
                ease:'power2.inOut',
            })

           setOpenIndex(index);
        }
    }

  return (
    <div className='px-4 py-2 md:px-6 lg:px-16 -mt-6'>
    <div className='flex flex-col items-start lg:items-center gap-4 lg:flex-row  justify-between'>
        <TextUP text={"My"} secText={'Expertise'}/>
        <div className='lg:text-end text-wrap lg:w-[27%] lg:self-end'>
            <p className='text-sm md:text-xl lg:text-base uppercase'>Personalized digital experiences that</p>
            <p className='text-sm md:text-xl lg:text-base uppercase'>enhance your brand and achieve results</p>
        </div>
    </div>
    <hr  className='mt-6'/>
    <div className='flex justify-between mt-2 md:mt-4 lg:mt-6'>
        <p>EXPERTISE</p>
        <p>FIELD</p>
    </div>
    <div className='w-full mt-6'>
        <div className='w-full lg:w-[80%] ml-auto flex flex-col gap-2 lg:gap-1'>
            {expertise.map((e,i)=>(
                <>
               <div className='flex justify-between items-center p-2' key={i}>
                <p className='lg:text-base'>{String(i+1).padStart(2,"0")}</p>
                <p className='text-start md:text-2xl lg:text-[18px] justify-self-start'>{e.title}</p>
                <div ref={(el) => (btnRefs.current[i] = el)} className='w-6 md:w-8 aspect-square rounded p-1 md:p-2 bg-[var(--black)] 
                cursor-pointer' onClick={()=>toggleInfo(i)}>
                    <div className='bg-[var(--baseBackground)] w-full aspect-square rounded-full pointer-events-none'></div>
                </div>
               </div>
                <div  className={`info-${i} flex items-center justify-center overflow-hidden`}>
                   <div className='px-4 py-6 flex items-center justify-center '>
                     <p className='lg:w-1/2  text-center'>
                        {e.content}
                    </p>
                   </div>
                </div>
               <hr />
               </>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Expertise