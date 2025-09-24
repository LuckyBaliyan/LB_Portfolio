import React from 'react'
import { Link } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";

const MainBtn = ({text,link='/works',custome=''}) => {
  return (
    <Link to={link}>
        <button className={`main-btn flex gap-3 items-center justify-center ${custome}`}>
            {text}
            <FaLocationArrow className='tex-md rotate-6'/>
        </button>
    </Link>
  )
}

export default MainBtn;