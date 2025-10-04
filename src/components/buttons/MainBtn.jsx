import React from 'react'
import { Link } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";

const MainBtn = ({text,link='',custome='',forResume = false}) => {

  const downloadResume = () => {
    if(forResume){
      const link = document.createElement('a');
      link.href = '/docs/LUCKY_BALIYAN_RESUME_FINAL.pdf'; 
      link.download = 'LUCKY_BALIYAN_RESUME_FINAL.pdf';
      link.click();
    }
    else{
      return
    }
  };

  return (
    <Link to={link}>
        <button onClick={downloadResume} className={`main-btn flex gap-3 items-center justify-center ${custome}`}>
            {text}
            <FaLocationArrow className='tex-md rotate-6'/>
        </button>
    </Link>
  )
}

export default MainBtn;