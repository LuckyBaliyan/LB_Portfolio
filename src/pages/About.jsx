import React,{useRef} from 'react'
import Transition from '../animations/pageTransition/Transition'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import Menu from '../components/header/Menu'
import { MyImages } from '../context/data'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {
  const imagesRef = useRef([]);
  const wrapperRef = useRef(null);
  const paramsRef = useRef([]);
  const wordsRef = useRef([]);
  const lastImageRef = useRef(null);

  useGSAP(()=>{

    const mainTimeline = gsap.timeline({});
    const isMobile = window.innerWidth < 768;
    const isTabletOrMobile = window.innerWidth < 1024;

    mainTimeline.to(paramsRef.current,{
      y:0,
      ease:'power3.inOut',
      duration:0.8,
      delay:1.35,
    })

    .to(wrapperRef.current,{
      width: isMobile ? `80vw` : '224px',
      height: isMobile ? `30vh` : '272px',
      marginLeft: isMobile ? '8px' : '16px',
      marginRight: isMobile ? '8px' : '16px',
      ease:'power3.inOut',
      delay:0.1,
      duration:0.2,
    })

    .to(imagesRef.current,{
      scale:1,
      transformOrigin:'center center',
      ease:'power3.out',
      duration:0.8,
      stagger:0.1,
    })

    .to(paramsRef.current[0],{
      y:-100,
      duration:0.8,
      ease:'power3.inOut',
    },"a")

    .to(paramsRef.current[1],{
      y:100,
      ease:'power3.inOut',
      duration:0.8,
    },"a")

    .to(wrapperRef.current,{
      x:isTabletOrMobile?0:430,
      y:200,
      scale:0.7,
      ease:'none',
      duration:0.5,
    },"a")

    .to(wordsRef.current,{
      opacity:1,
      duration:0.5,
      ease:'power3.inOut',
      stagger:{
        amount:1,
        from:'random',
      },
    },"a")

    .to(lastImageRef.current,{
      opacity:1,
      scale:1,
      rotate:360,
      ease:'power3.inOut',
      duration:1,
    })

  },[])



  return (
    <>
      <Nav/>
      <div className="fixed top-4 right-4 opacity-100 pointer-events-auto z-[800]">
       <Menu />
      </div>
      <section>
      <div className="relative w-full h-screen">
          <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full max-w-4xl px-4">
            
            <div className="overflow-hidden px-2 md:whitespace-nowrap">
              <p ref={(el)=>paramsRef.current[0] = el} className='translate-y-[-100%]'>Thanks To</p>
            </div>
        

           <div ref={wrapperRef} 
           style={{backgroundImage:'url(/images/my1.jpg)',backgroundPosition:'center',backgroundSize:'cover',
            backgroundRepeat:'no-repeat'}} 
           className="transition-all  overflow-hidden duration-700 ease-in-out w-0 relative h-0 mx-0" >
           {MyImages.map((img,i)=>(
             <img
              ref={(el)=>imagesRef.current[i] = el}
              key={i}
              src={img}
              alt="Center"
              className='absolute scale-0'
            />
           ))}
          </div>
        
            <div className="overflow-hidden px-2 md:whitespace-nowrap">
              <p ref={(el)=> paramsRef.current[1] = el} className='translate-y-[100%]'>Be Here</p>
            </div>
        
          </div>
          <div className='absolute z-20 top-1/2 left-1/2 w-full  lg:w-auto -translate-x-1/2 -translate-y-1/2'>
             <p className='text-center  text-base md:text-2xl lg:text-4xl'>
                {'I’m passionate about learning and creating meaningful digital experiences that connect with people. As a student, I’m eager to grow my skills and explore how thoughtful design and authentic storytelling can inspire, engage, and make an impact. I believe every project is an opportunity to learn, innovate, and tell a unique story.'
                .split(' ').map((w,i)=>(
                  <span ref={(el)=>wordsRef.current[i] = el} key={i} className='inline-block opacity-0 px-1'>
                    {w}
                  </span>
                ))}
             </p>
          </div>  
          <div ref={lastImageRef} className='absolute left-[20%] top-[25%] opacity-0 scale-0 size-40 hidden lg:block'>
            <img src="/images/Emoji.webp" alt="" />
          </div>
       </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Transition(About);