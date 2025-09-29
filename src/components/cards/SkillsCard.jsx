import React from 'react';
import { FloatingImage } from '../features/FloatingImage';

const SkillsCard = ({text='',path='',col=''}) => {
  return (
    <div className="relative w-36 h-42 lg:w-48 lg:h-64 overflow-hidden rounded-xl transition-all shadow-[#000000b3] shadow hover:scale-101 bg-[#1c1c1c]">
      <div className="absolute flex flex-col-reverse gap-4  items-center justify-center text-white z-[10] opacity-100 rounded-xl inset-0.5 bg-[#1c1c1c]">
        <p>{text}</p>
        <FloatingImage src={path} className='w-22 h-22 object-cover z-[30]' col={col} />
      </div>
    </div>
  );
}

export default SkillsCard;
