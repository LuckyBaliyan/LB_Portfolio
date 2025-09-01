import React from 'react'
import { Link } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";

const MainBtn = ({text}) => {
  return (
    <Link to='/works'>
        <button className='main-btn flex gap-3 items-center justify-center'>
            {text}
            <FaLocationArrow className='tex-md rotate-6'/>
        </button>
    </Link>
  )
}

export default MainBtn;