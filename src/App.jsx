import React,{lazy,Suspense,useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Project from './pages/Project';

const Home = lazy(()=>import('./pages/Home'));
const Works = lazy(()=>import('./pages/Works'));
const About = lazy(()=>import('./pages/About'));
const Contact = lazy(()=>import('./pages/Contact'));


const App = () => {

  return (
    <>
    <Suspense>
    <Routes>
       <Route element={<MainLayout />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/works' element={<Works />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/project/:projectId' element={<Project />} />
       </Route>
    </Routes>
    </Suspense>
    </>
  )
}

export default App
