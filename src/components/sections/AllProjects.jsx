import React,{useState,useEffect} from 'react'
import TextUP from '../../animations/Reavel/TextUP'
import { allProjects, latest } from '../../context/data'
import { FaArrowRight } from "react-icons/fa";
import MainBtn from '../buttons/MainBtn';
import MovingCard from '../features/MovingCard';



const AllProjects = () => {
      const [pos, setPos] = useState({ x: 700, y: 100 });
      const [isInside, setIsInside] = useState(false);
      const [activeIndex,setActiveIndex] = useState(null);

    const handleMouseMove = (e) => {
           const rect = e.currentTarget.getBoundingClientRect();
           const x = e.clientX - rect.left;
           const y = e.clientY - rect.top;
           setPos({ x, y });
     };

  return (
   <div className='py-6'>
      <div className='flex flex-col gap-6'>
        <div className='self-center'>
            <TextUP text={'Projects'} secText={'Works'} className='text-center'/>
        </div>
        <div onMouseMove={handleMouseMove} onMouseDownCapture={handleMouseMove}  onMouseEnter={()=>setIsInside(true)} onMouseLeave={()=>{setIsInside(false);setActiveIndex(null)}} className='w-full mt-6 relative'>
         <MovingCard images={allProjects.map(p=> p.img)} activeIndex={activeIndex} x={pos.x} y={pos.y} opacity={isInside?1:0} />
         {allProjects.map((p,i)=>(
           <div key={i}  className='flex flex-col cursor-pointer lg:flex-row justify-between px-4 py-2 border-t-[1px] relative scale-transition' onMouseEnter={()=>setActiveIndex(i)}>
            <div className="scale-overlay absolute w-full h-full bg-amber-400 top-0 left-0 -z-[20] origin-center"></div>
            <div className='flex flex-col lg:flex-row  items-center justify-between lg:w-1/3'>
                <h4 className='font-[satoshi] text-center md:text-start text-6xl font-semibold'>{p.Title}</h4>
                <p className='text-3xl'>{p.Date}</p>
            </div>
            <div className="flex gap-2 items-center z-[30]  lg:w-1/3  font-semibold">
                <p className='hover:underline text-center lg:text-start transition leading-tight md:leading-normal md:text-2xl '>{p.para}</p>
                <FaArrowRight className='text-black hidden lg:block mix-blend-difference underline text-3xl font-extrabold -rotate-45'/>
            </div>
            <div className='size-32 overflow-hidden lg:hidden self-center'>
              <img src={p.img} alt="" />
              <div className='absolute bottom-[5%] left-1/2 translate-x-[-50%]  bg-[var(--semiDark)] p-2 flex items-center justify-center rounded-full'>
                <FaArrowRight className='text-white lg:hidden mix-blend-difference underline lg:text-3xl font-extrabold  -rotate-45'/>
              </div>
            </div>
           </div>
         ))}
        </div>
        <div className='w-full flex justify-center items-center '>
            <MainBtn text={'View All'} />
        </div>
      </div>
   </div>
  )
}

export default AllProjects