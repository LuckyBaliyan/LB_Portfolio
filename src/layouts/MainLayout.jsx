import React from 'react'
import { Outlet } from 'react-router-dom'
import useLenis from '../hooks/lenis/useLenis'

const PageLayout = () => {
  useLenis();
  return (
    <main className='w-full min-h-screen'>
        <Outlet/>
    </main>
  )
}

export default PageLayout