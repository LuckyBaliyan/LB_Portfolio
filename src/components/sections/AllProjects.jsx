import React from 'react'
import TextUP from '../../animations/Reavel/TextUP'
import { allProjects } from '../../context/data'
import { FaArrowRight } from "react-icons/fa";
import MainBtn from '../buttons/MainBtn';

const AllProjects = () => {
  return (
   <div className='py-6'>
      <div className='flex flex-col gap-6'>
        <div className='self-center'>
            <TextUP text={'Projects'} secText={'Works'} className='text-center'/>
        </div>
        <div className='w-full mt-6'>
         {allProjects.map((p,i)=>(
           <div key={i} className='flex flex-col cursor-pointer lg:flex-row justify-between px-4 py-2 border-t-[1px]'>
            <div className='flex flex-col lg:flex-row  items-center justify-between lg:w-1/3'>
                <h4 className='font-[satoshi] text-6xl font-semibold'>{p.Title}</h4>
                <p className='text-3xl'>{p.Date}</p>
            </div>
            <div className="flex gap-2 items-center  lg:w-1/3  font-semibold">
                <p className='hover:underline transition leading-tight md:leading-normal md:text-2xl '>{p.para}</p>
                <FaArrowRight className='text-white mix-blend-difference underline text-3xl font-extrabold -rotate-45'/>
            </div>
           </div>
         ))}
        </div>
        <div className='w-full flex justify-center items-center'>
            <MainBtn text={'View All'} />
        </div>
      </div>
   </div>
  )
}

export default AllProjects