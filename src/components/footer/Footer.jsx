import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import React,{useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { data } from '../../context/data';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const revealRef = useRef(null);
  const imagesRef = useRef([]);

  const navigate = useNavigate();

  useGSAP(() => {
  
    gsap.set(imagesRef.current, { scale: 0, opacity: 0 });
    gsap.set(revealRef.current, { y: 100, opacity: 0 });

    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: revealRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 1, 
      }
    });

 
    tl.to(revealRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    });

    
    tl.to(imagesRef.current[0], {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.15
    }, "<+=0.1");

    tl.to(imagesRef.current[1], {
      scale: 1,
      rotate:-25,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.15
    }, "<+=0.1");

  }, []);

  return (
    <div className='w-full h-full text-5xl bg-[#121212]'>
      <div className='w-full h-[80vh] lg:min-h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center gap-4 mask py-4'>
          <h1
            ref={revealRef}
            className='text-[var(--textWhite)] text-center uppercase'
          >
            Let's Work <br /> 
            T
            <img
              ref={el => imagesRef.current[0] = el}
              src='images/my1.jpg'
              alt=''
              className='lg:w-24 w-8 md:w-16 aspect-square inline-block rounded-full object-cover'
            />
            gether
          </h1>

          <div onClick={()=>navigate('Contact')}  ref={el => imagesRef.current[1] = el} className='w-18 lg:w-24 aspect-square rounded-full cursor-pointer bg-[var(--accent)] p-4'>
            <img
              src="images/arrow.svg"
              alt=""
              className='object-cover'
            />
          </div>
        </div>
      </div>
      {/** Main Footer Area */}
      <div>
         <div className='flex flex-col md:flex-row items-start gap-10 justify-evenly px-4'>
            <div className='md:w-[30%] lg:w-[50%]'>
              <h2 className='text-[var(--textWhite)] font-[zentry] tracking-tight md:text-5xl lg:text-8xl'>Creative <br /> Developer</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-2 justify-between'>
              <div>
              <h4 className='text-[var(--textWhite)] text-xl md:text-2xl'>/ Quick Links</h4>
              <ul className='p-0 flex flex-nowrap  md:flex-wrap w-full md:w-[90%] lg:w-[80%]'>
                {data.map((l,i)=>(
                  <li key={i} onClick={()=>navigate(l.link)} className='py-1 px-2  text-sm md:text-base transition hover:scale-105 cursor-pointer mr-auto md:px-4 m-1 rounded-full bg-[var(--accent)]'>
                    {l.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className='lg:w-1/3'>
              <h4 className='text-[var(--textWhite)] text-2xl'>/ Contact Info</h4>
              <div><a href="mailto:baliyanlucky85@gmail.com" className='text-base text-[var(--textWhite)] font-[Neue]'>baliyanlucky85@gmail.com</a></div>
              <div className='mt-6'>
                <p className='text-[var(--textWhite)] text-base'>+91 9759940199</p>
              </div>
              <div className='mt-6'>
                <p className='text-[var(--textWhite)] text-sm'>Galgotias University,Gautam buddh Nagar</p>
                <p className='text-[var(--textWhite)] text-sm'>Greater Noida, Uttar Pradesh</p>
                <p className='text-[var(--textWhite)] text-sm'>India</p>
              </div>
            </div>
            </div>
         </div>
         <div className='w-full mt-6 p-4'>
          <h3 className='lg:text-[15rem] md:text-[6rem] font-[Neue] whitespace-nowrap text-[var(--textWhite)] text-center'>Lucky Baliyan</h3>
         </div>
         <div className='flex items-center justify-between p-2'>
          <p className='text-sm text-[var(--textWhite)]'>@2025</p>
          <p className='text-sm text-[var(--textWhite)]'>Designer / Developer</p>
          <p className='text-sm text-[var(--textWhite)]'>since 2024</p>
         </div>
      </div>
    </div>
  );
};

export default Footer;
