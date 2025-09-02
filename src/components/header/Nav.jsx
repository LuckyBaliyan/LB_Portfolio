import { useGSAP } from '@gsap/react'
import React,{useRef,useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap';
import Menu from './Menu';

const Nav = ({delay = 0.4}) => {
  const logoRef = useRef(null);
   const [hideLinks,setHideLinks] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.98) {
        setHideLinks(true);
      } else {
        setHideLinks(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  useGSAP(()=>{
    const tl = gsap.timeline({});

    tl.to(logoRef.current,{
      y:0,
      ease:'ease.in',
      duration:0.65,
      delay:delay,
    })

    .to('.links',{
      y:0,
      ease:'ease.in',
      duration:0.25,
      stagger:0.02,
      onComplete:()=>{
        gsap.to('.anim-placeholder',{opacity:1,ease:'ease.in',duration:0.5})
      }
    })
  },[])

  return (
    <nav className='mix-blend-difference text-white'>
       <div className="logo special-font tracking-wide mask flex-col md:flex-row flex gap-2">
          <h6 ref={logoRef} className='translate-y-[100%]'>
            <b>L</b><b>B</b><sup className='text-3xl'>&copy;</sup>
          </h6>
          <p className='md:inline-block hidden opacity-0 text-sm !text-white translate-x-[-15%] md:translate-x-0 scale-70 md:scale-100 font-light self-center anim-placeholder'>
            (web Developer / Designer)
          </p>
       </div>
       <div className={`navigations transition-all ease-linear duration-300 ${hideLinks?'opacity-0 pointer-events-none':'opacity-100 pointer-events-auto'}`}>
         <ul>
          {
            ['Home','Works','about','contact'].map((l,i)=>(
              <NavLink to={`/${l === 'Home'?'':l}`} key={i} 
              className={({ isActive }) =>
                  isActive
                    ? "text-[#E63946] font-semibold"
                    : ""
                }
                end={l === 'Home'}
                >
                <li className='mask link text-right md:text-center'>{l.split('').map((w,ind)=>(
                  <span className='uppercase inline-block translate-y-[110%] links' key={ind}>{w}</span>
                ))}</li>
              </NavLink>
            ))
          }
         </ul>
       </div>
    </nav>
  )
}

export default Nav