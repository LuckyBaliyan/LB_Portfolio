import React from 'react'
import { Outlet } from 'react-router-dom'
import useLenis from '../hooks/lenis/useLenis'
import Menu from '../components/header/Menu'

const PageLayout = () => {
  useLenis();
  return (
    <main className='w-full min-h-screen relative'>
        <Outlet/>
    </main>
  )
}

export default PageLayout