import { useGSAP } from '@gsap/react'
import React,{useRef} from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap';

const Nav = ({delay = 0.4}) => {
  const logoRef = useRef(null);

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
       <div className="logo special-font tracking-wide mask flex gap-2">
          <h6 ref={logoRef} className='translate-y-[100%]'>
            <b>L</b><b>B</b><sup className='text-3xl'>&copy;</sup>
          </h6>
          <p className='inline-block opacity-0 text-sm !text-white font-light self-center anim-placeholder'>
            (web Developer / Designer)
          </p>
       </div>
       <div className="navigations">
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
                <li className='mask link'>{l.split('').map((w,ind)=>(
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