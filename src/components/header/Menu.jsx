import React, { useRef, useState, useEffect } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    gsap.registerPlugin(CustomEase);

    const [isOpen,setIsOpen] = useState(false);
    const isAnimating = useRef();
    const pathRef = useRef();
    const menuRef = useRef();
    const btnRef = useRef();

    const toggleMenu = ()=>{
        if(isAnimating.current) return;
        setIsOpen(!isOpen);
    }

    CustomEase.create(
            "menuEase",
    "M0,0 C0.25,0.1 0.25,1 1,1" 
    );

    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
    } 100 0`;

    const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
    } 100 0`;


    const data = [
        {
            name:'Home',
            link:''
        },
        {
            name:'Works',
            link:'works',
        },
        {
            name:'About',
            link:'about',
        },
        {
            name:'Contact',
            link:'contact'
        }
    ]

    const socials = [
        'Github','Instagramm','Linkdin','Youtube'
    ]

    useEffect(()=>{
        const handleScroll = () => {
          if (window.scrollY > window.innerHeight * 0.90) {
            gsap.to(btnRef.current,{
                opacity:1,
                pointerEvents:'auto',
                ease:'none',
            })
          } else {
            gsap.set(btnRef.current,{
                opacity:0,
                pointerEvents:'none',
            })
          }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    useGSAP(()=>{
      if(isOpen){
        gsap.to(pathRef.current,{
            attr:{d:targetPath},
            duration:0.8,
            ease:'power3.inOut',
        });
        gsap.to(menuRef.current,{
            x:0,
            duration:0.8,
            ease:"menuEase",
            onStart:()=>(isAnimating.current = true),
            onComplete:()=>(isAnimating.current = false)
        })
        gsap.fromTo('.mask-sp',{
            y:"100%",
        },{
            y:0,
            ease:'power3.inOut',
            duration:0.6,
            stagger:0.04,
        })
      }
      else{
        gsap.to(pathRef.current,{
            attr:{d:initialPath},
            duration:0.6,
            ease:'power3.inOut',
        });
        gsap.to(menuRef.current,{
            x:"200%",
            duration:1,
            ease:"menuEase",
            delay:0.1,
        })
      }
    },[isOpen,setIsOpen])

  return (
    <div ref={btnRef} className='opacity-0 pointer-events-none'>
        <button onClick={toggleMenu} className='hb-btn'>
            <div className={`bars ${isOpen?'cross':''}`}></div>
            <div className={`bars ${isOpen?'cross':''}`}></div>
        </button>
        <div className='main-nav' ref={menuRef}>
        <div id="main-h">
            <p>Navigation</p>
        </div>
        <div id="menu-links">
            {
                data.map((link,i)=>(
                    <h5 key={i} className='mask lg:leading-[1.4]'>
                       <NavLink to={`/${link.link}`}  className={({ isActive }) =>
                        `p-0 rounded-full transition-all duration-200 whitespace-nowrap ${
                          isActive ? "bg-[#292929] text-white px-6 " : "text-[#d6d2d2] px-6"
                        }`}>
                        {link.name.split('').map((word,ind)=>(
                            <span key={ind} className='mask-sp'>{word.toUpperCase()}</span>
                        ))}
                       </NavLink>
                    </h5>
                ))
            }
        </div>
        <div className='footer'>
            {
                socials.map((s,indx)=>(
                    <p key={indx}>
                        {s}
                    </p>
                ))
            }
        </div>
         <svg className='svg'
        viewBox={`0 0 200 ${window.innerHeight}`}
      >
        <path ref={pathRef} d={initialPath} />
      </svg>
      </div>
    </div>
  )
}

export default Menu;