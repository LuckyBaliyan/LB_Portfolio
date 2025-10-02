import React, { useRef, useLayoutEffect,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/header/Nav';
import Footer from '../components/footer/Footer';
import Menu from '../components/header/Menu';
import Transition from '../animations/pageTransition/Transition';
import { allProjects } from '../context/data';
import SplitText from '../animations/splitText/SplitText';
import Reavel from '../animations/Reavel/Reavel';
import SplitLine from '../animations/splitText/SplitLine';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { IoMdArrowDown } from "react-icons/io";
import FlipCard from '../animations/cards/FlipCard.jsx';
import { FaArrowRight } from "react-icons/fa";
import ProjectsBtn from '../components/buttons/ProjectsBtn.jsx';
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);

const ProjectWrapper = () => {
  const { projectId } = useParams();
  return <Project key={projectId} projectId={projectId} />;
};


const Project = ({projectId}) => {
    const project = allProjects.find((p)=> p.id === parseInt(projectId));
    const currentIndex = allProjects.findIndex(p => p.id === parseInt(projectId));
    const nextProject = allProjects[(currentIndex + 1) % allProjects.length];


    const headingRef = useRef(null);
    const paraRef = useRef(null);
    const scaleUpRef = useRef(null);
    const opacityRef = useRef(null);
    const imageRef = useRef(null);
    const spanRefs = useRef([]);
    const imageRefs = useRef([]);
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null);
    const wordsRef = useRef([]);
    const parasRef = useRef([]);
    const counterRef = useRef(null);
    


    Reavel(headingRef,{delay:1,stagger:0.04});
    Reavel(paraRef,{delay:1,stagger:0.04});

    const navigate = useNavigate();

    const handleNextProject = () => {
      const nextId = project.id + 1;
      if (nextId > allProjects.length) {
        navigate(`/project/1`); 
      } else {
        navigate(`/project/${nextId}`);
      }
    };

    
    useEffect(() => {
        const handleLoad = () => {
          ScrollTrigger.refresh();
        };
    
        window.addEventListener('load', handleLoad);
        const timeout = setTimeout(() => ScrollTrigger.refresh(), 500);
    
        return () => {
          window.removeEventListener('load', handleLoad);
          clearTimeout(timeout);
        };
    }, []);
    
    useLayoutEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: scaleUpRef.current,
                start: 'top 80%', 
                end: 'bottom 20%',
                scrub:1, 
                once:true,
            }
        });

        gsap.fromTo(opacityRef.current,{
         clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration:1,
          delay:1,
          ease:'circ.inOut',
        })

        gsap.to(parasRef.current,{
        y:0,
        opacity:1,
        ease:'power3.inOut',
        delay:1,
        duration:0.5,
       })

        tl.to(imageRef.current, { scale: 1, ease: 'power1.out' }, 0); 

        gsap.to(spanRefs.current,{
            opacity:1,
            ease:'power3.inOut',
            duration:0.1,
            stagger:0.01,
            scrollTrigger:{
                trigger:spanRefs.current,
                start:'top bottom',
                end:'bottom top',
                scrub:true,
            }
        });



       gsap.to(imageRefs.current,{
            scale:0,
            opacity:0,
            transformOrigin:'center center',
            z:-10000,
            ease:'power3.inOut',
            scrollTrigger:{
                trigger:imageRefs.current,
                start:'top 80%',
                end:'bottom 20%',
                scrub:2,
            }
        })
       

        ScrollTrigger.matchMedia({
            "(max-width: 768px)": function () {
              gsap.to(videoRef.current, {
                y: 200,
                scale:2.5,
                height: "30vh",
                transformOrigin: "center",
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: videoRef.current,
                  start: "top 70%",
                  end: "bottom top",
                  scrub: 2,
                },
              });
            },
          
            // Desktop (min-width: 769px)
            "(min-width: 769px)": function () {
              gsap.to(videoRef.current, {
                y: 500,
                scale: 3.2,
                height: "30vh",
                transformOrigin: "center",
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: videoRef.current,
                  start: "top 70%",
                  end: "bottom top",
                  scrub: 2,
                },
              });
            }

        });


        gsap.fromTo(wordsRef.current,{
            opacity:0,
            y:100,
        },{
            opacity:1,
            y:0,
            ease:'power3.inOut',
            stagger:0.01,
            scrollTrigger:{
                trigger:wordsRef.current,
                start:'top bottom',
                end:'bottom top',
                scrub:4,
                toggleActions:'play none none reverse',
                once:true,
            }
      });

    let ctx = gsap.context(() => {
    if (counterRef.current) {
      ScrollTrigger.create({
        trigger: counterRef.current,
        start: "top 60%", 
        end: "bottom+=600 top",
        onEnter: () => {
          if(project.id === allProjects.length + 1){
            counterRef.current.innerHTML = `Project-${String(1).padStart(2, "0")}`
          }
          else{
          counterRef.current.innerHTML = `Project-${String(project.id + 1).padStart(2, "0")}`;
          }
        },
        onLeaveBack: () => {
          counterRef.current.innerHTML = `Project-${String(project.id).padStart(2, "0")}`;
        },
      });
    }
  });

  return () => ctx.revert(); 

  }, [project.id]);

    return (
      <>
        <Nav/>
        <div className="fixed top-4 right-4 opacity-100 pointer-events-auto z-[800]">
            <Menu />
        </div>
        <section className='py-6'>
            <div className='px-4 py-2 flex flex-col items-center justify-center md:items-start md:justify-center gap-6 min-h-[50vh]'>
                <h2 ref={headingRef} className='mask p-4'><SplitText text={project.Title} /></h2>
                <p ref={paraRef} className='text-xl text-center md:text-start md:pl-6 leading-tight mask'>
                    <SplitLine text='I am Passionate about 
                    crafting Memorable Experiences.' className='opacity-0' />
                </p>
            </div>
            <div className='flex justify-between px-4 md:px-12 mask'>
                <p ref={(el)=>parasRef.current[0] = el} className='font-[Neue] text-gray-600 uppercase opacity-0 will-change-transform translate-y-[100%]'>Project-{String(projectId).padStart(2,"0")}</p>
                <p ref={(el)=>parasRef.current[1] = el} className='font-[Neue] text-gray-600 uppercase opacity-0 will-change-transform translate-y-[100%]'>
                    Scroll  <IoMdArrowDown className='text-center inline-block'/></p>
                <p ref={(el)=>parasRef.current[2] = el} className='font-[Neue] text-gray-600 uppercase opacity-0 will-change-transform translate-y-[100%]'>CREATED {project.Date}</p>
            </div>
            <div ref={opacityRef} className='w-[100%]  min-h-screen relative overflow-hidden ml-auto mr-auto mt-4'>
                <img ref={imageRef} src={project.img} alt="" className='absolute inset-0  scale-150 w-full h-full object-cover z-10'/>
            </div>
        </section>
        <section className='min-h-screen'>
            <h4 className='md:w-[60%] md:text-2xl text-xl lg:text-5xl ml-auto px-4'>
                {project.para.split(' ').map((w,i)=>(
                    <span key={i} ref={(el)=>spanRefs.current[i] = el} className='inline-block opacity-20 lg:p-[3px] span-reveal'>
                        {w}
                    </span>
                ))}
            </h4>
            <div className='mt-6 pt-16'>  
            <div ref={videoContainerRef} className="w-full relative h-[25vw] mt-6 pt-16">
              {project.imges.slice(0,3).map((m,i) => {
                const leftPos = (i === 2)? i*(32+2) + 'vw': i * (32 + 2) + "vw"; 
                return (
                  <div
                    key={i}
                    className="absolute top-0"
                    style={{ left: leftPos, width: "32vw", height: "25vw" }}
                  >
                    {i % 2 === 0 ? (
                      <img
                        ref={(el) => (imageRefs.current[i] = el)}
                        src={m.img}
                        alt=""
                        className="w-full h-full object-cover z-[10]"
                      />
                    ) : (
                      <video
                        ref={videoRef}
                        src={project.video}
                        loop
                        muted
                        autoPlay
                        className="w-full h-full object-cover !z-[999]"
                      ></video>
                    )}
                  </div>
                );
              })}
            </div>
            </div>

            <div className='relative mt-[90vh] md:mt-[130vh] lg:mt-[90vh] px-4'>
               <p className='text-sm md:text-2xl font-bold mask'>{project.content.split(' ').map((w,i)=>(
                <span ref={(el) => wordsRef.current[i] = el} key={i} className='inline-block p-[2px]'>{w}</span>
               ))}
               </p>
            </div>
        </section>
        <section className='mt-32 '>
            <div className='flex flex-col gap-4 lg:justify-between lg:flex-row px-4'>
              <div>
                 <h4 className='text-center lg:text-start'>Stack Used</h4>
                  <div className='flex flex-wrap mt-4 items-center w-full justify-center lg:justify-start lg:w-[50%] gap-2'>
                      {
                      project.stack.map((s,i)=>(
                          <p key={i}  className='bg-[var(--accent)] text-xs sm:text-base uppercase py-2 px-2 sm:px-4 lg:px-6 rounded-full'>{s}</p>
                      ))
                     }            
                  </div>
                  <div className='flex w-full justify-center lg:justify-start gap-4 mt-6'>
                    {project.link &&
                    <ProjectsBtn link={project.link} text="Visit" icon={<CiGlobe />} />
                    }
                    <ProjectsBtn link={project.github} text="GitHub" icon={<FaGithub />} />
                  </div>
              </div>
              <div className='flex items-center mt-16 md:mt-24 lg:mt-0 flex-col md:gap-4'>
                <FlipCard frontImage={project.img} backImage={nextProject.img}/>
                 <div  onClick={()=>handleNextProject()}  className='flex gap-2 cursor-pointer'>
                  <h5 ref={counterRef}  className='font-[Neue] !xs:text-base sm:text-2xl  md:text-3xl project-no uppercase font-semibold'>Project-{String(project.id).padStart(2,"0")}</h5>
                  {projectId !== project.id &&
                 <FaArrowRight className='text-black lg:text-3xl font-extrabold  -rotate-45'/>
                  }
                 </div>
              </div>
            </div>
            <div className='bg-[var(--accent)] mt-12 px-4 lg:masker-border'>
              {project.imges.length > 3 && (
              <div className="px-4 py-32 lg:py-24">
                <h3 className="text-2xl md:text-5xl font-semibold mb-8 uppercase lg:text-center">More Visuals</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
                  {project.imges.map((img, i) => {
                    const randomSize = [
                      'row-span-1 col-span-1',
                      'row-span-2 col-span-1',
                      'row-span-1 col-span-2'
                    ][i];
            
                    return (
                      <div
                        key={i}
                        className={`relative z-40 overflow-hidden  rounded-md ${randomSize}`}
                      >
                        <img
                          src={img.img}
                          alt={`project-img-${i}`}
                          className="w-full h-full z-30 object-cover hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
        <footer>
            <Footer/>
        </footer>
      </>
    )
}

export default Transition(ProjectWrapper);
