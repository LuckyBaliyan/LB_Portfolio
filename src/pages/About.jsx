import React,{useRef} from 'react'
import Transition from '../animations/pageTransition/Transition'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import Menu from '../components/header/Menu'
import { MyImages } from '../context/data'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TextUP from '../animations/Reavel/TextUP'
import MainBtn from '../components/buttons/MainBtn'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const About = () => {
  const imagesRef = useRef([]);
  const wrapperRef = useRef(null);
  const paramsRef = useRef([]);
  const wordsRef = useRef([]);
  const lastImageRef = useRef(null);
  const scrollImagesRef = useRef([]);

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
      }
    },"a")

    .to(lastImageRef.current,{
      opacity:1,
      scale:1,
      rotate:360,
      ease:'power3.inOut',
      duration:0.5,
    })

    gsap.to(scrollImagesRef.current,{
      scale:1,
      duration:0.8,
      ease:'power3.out',
      stagger:0.1,
      scrollTrigger:{
        trigger:scrollImagesRef.current,
        start:'top bottom',
        end:'bottom top',
        scrub:2,
      }
    })


    return()=> mainTimeline.kill();

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
      <section>
        <div className='bg-[#121212] rounded-t-4xl w-full min-h-screen px-4 py-16'>
           <div className='p-4 flex flex-col items-center gap-4 md:flex-row justify-between'>
              <TextUP text={'About'} secText={'Lucky'} color={'--textWhite'}/>
              <div className=' flex md:self-end justify-center   items-center'>
              <p className='uppercase text-[var(--textWhite)] cursor-pointer'>Available to work</p>
             </div>
           </div>
           <div className='px-4'><hr className='text-[var(--textWhite)] font-light' /></div>
          <div className='flex justify-between p-4'>
            <p className='text-[var(--textWhite)]'>Welcome To</p>
            <p className='text-[var(--textWhite)]'>My Life</p>
          </div>
          <div className='flex flex-col items-center lg:items-end justify-between gap-4 lg:px-12  py-6'>
          <div className='w-full lg:w-[75%] h-[80vh] relative overflow-hidden'>
            {Array.from({length:7}).map((_,i)=>(
              <img ref={(el)=>scrollImagesRef.current[i] = el} key={i} src="/images/galgotias.webp" alt="" 
              className='object-cover object-bottom absolute scale-0'/>
            ))}
          </div>
          <div className='lg:w-[75%]'>
            <p className='text-[var(--textWhite)] text-[20px]'>
                Hey, I'm Lucky Baliyan — a passionate and driven Computer Science undergrad based in Greater Noida, India.
                <br />
                <br />
                Currently in my third year of B.Tech in CSE, I began my coding journey in my very first year of college, diving in without any prior knowledge. What started as curiosity quickly turned into a deep fascination — from understanding core programming in C to mastering Python and OOPs concepts early on.
                <br />
                <br />
                As I progressed into my second year, I discovered my true passion in web development. I’ve since explored not only how modern websites are built, but how they’re structured for performance — from responsive design to SEO best practices. I specialize in the MERN stack, and I'm continuously refining my skills while preparing to transition into DevOps in the near future.
                <br />
                <br />
                Beyond the full stack, I also enjoy bringing interfaces to life with smooth, engaging animations. I’ve worked with GSAP and Framer Motion, and have foundational experience with WebGL and shader basics to experiment with creative, immersive visuals.
                <br />
                <br />
                In addition to coding, I have a solid understanding of Java and am currently sharpening my DSA skills in Java as well. I've also had the opportunity to apply my skills in real-world, team-driven environments. I participated in  hackathons like — one with Hack2Skills, where I built a React-based chatbot entirely on my own, and another organized by Galgotias Tech Council called CodeAstra, where I led my team as both the frontend developer and team captain. In that role, I carefully managed task distribution, aligned responsibilities with each member’s strengths, and ensured smooth collaboration throughout the event. These experiences have helped me grow not just technically, but also as a communicator and team player.
                <br />
                <br />
                I’m always learning, experimenting, and pushing myself to become a better developer every day. Whether it's code, design, or animation — if it's creative and challenging, I'm all in.
            </p>
          </div>
          <div className='lg:w-[75%] py-4'>
            <MainBtn text={'Get My Resume'} custome='bg-[var(--accent)]' forResume={true} />
          </div>
        </div>
        </div>
        <div className='bg-[#121212]'>
          <div className='p-4 flex flex-col md:flex-row gap-4 items-center justify-between px-4'>
              <TextUP text={'My'} secText={'Socials'} color={'--textWhite'}/>
              <div className='md:self-end'>
                <p className='text-[var(--textWhite)] uppercase'>Find Me on Social Media</p>
              </div>
          </div>
          <div className='px-4'><hr className='text-[var(--textWhite)]'/></div>
          <div className="flex px-4 justify-between items-center mt-6 text-[var(--textWhite)]">
            <p>Follow</p>
            <p>My works</p>
          </div>
          <div className='px-4 text-[var(--textWhite)] mt-6'>
            <p>Over a Past few Months i have been working</p>
            <p>On immersive new and AI trendy web experiences every time i decode any new </p>
            <p>Web asthetic i put it on my social media follow me if u want several such micro and mini interactions.</p>
          </div>
          <div className='w-full h-[80vh] relative mt-6'>
            <video loop muted autoPlay src="/videos/social.mp4" className='w-full absolute top-0 left-0 z-20 h-full object-cover'></video>
             <div className="absolute top-0 left-0 w-full inset-0 z-0 h-full">
              <img src="/images/social_2.jpg" alt="" />
             </div>
          </div>
        </div>
        <div className='min-h-screen relative w-full py-6 px-4'>
            <div className='flex items-center justify-center'><h2>Find Me On</h2></div>
            <div className='flex items-center justify-center w-full flex-wrap gap-12  p-6 mt-6'>
              <FaSquareInstagram className='media-card' />
              <FaSquareGithub className='media-card' />
              <FaLinkedin className='media-card'/>
              <RiTwitterXLine className='media-card'/>
              <FaFacebookSquare className='media-card'/>
              <IoLogoYoutube className='media-card' />
            </div>
            <div className='flex items-center justify-center mt-6 '>
                <h3 className='uppercase text-3xl tracking-normal'>More about my soul</h3>
            </div>
            <div className='flex flex-wrap w-[80%] items-center md:items-start md:w-[65%] justify-between gap-4 mt-24 px-4'>
              {[
                {
                  title: "Activities",
                  items: ["Communication", "Hackathons", "Leaderships",'Team Player', "Digital Creator"],
                },
                {
                  title: "Languages",
                  items: ["Hindi", "English", "Bhojpuri", "Punjabi"],
                },
                {
                  title:'My Tools',
                  items:['Copiolet','Cursor','Lovable','Grock','ChatGpt','Gemini','MUI','Unicorn.stdo'],
                },
                {
                  title: "Hobbies",
                  items: ["Web Designing", "Gaming", "Volleyball", "Movies", "Music"],
                },
                {
                  title: "Music Taste",
                  items: [
                    "Sidhu Moosewala",
                    "Honey Singh",
                    "The Weekend",
                    "21 Savage",
                    "Travis Scott",
                    "Babbu Maan",
                    "Masoom Sharma",
                  ],
                },
              ].map((section, i) => (
                <div key={i} className="flex flex-col   gap-1">
                  <p className="font-semibold underline underline-offset-2">{section.title}</p>
                  {section.items.map((item, idx) => (
                    <p key={idx} className="text-sm font-mono">{item}</p>
                  ))}
                </div>
              ))}
            </div>
            <div className='size-64 hidden md:block absolute right-6 bottom-[15%] overflow-hidden'>
              <img src="/images/soul.jpeg" alt="" className='absolute top-0 left-0 w-full h-full' />
              <video className='absolute top-0 left-0 w-full h-full object-cover' src="/videos/soul.mp4" muted loop autoPlay></video>
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