import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const ProjectsBtn = ({text,icon}) => {
  return (
    <button className='main-btn flex items-center gap-2 !color-[var(--textWhite)]'>
        {icon && <p className='text-xl'>{icon}</p>}
        <p>{text}</p>
    </button>
  )
}

export default ProjectsBtn