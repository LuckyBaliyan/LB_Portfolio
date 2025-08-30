import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'
import Contact from './pages/Contact'
import InitialLoader from './animations/initialLoader/InitialLoader'

const App = () => {
  const [initialState,setInitailState] = useState(false);

  if(!initialState){
    return <InitialLoader  onFinish = {()=>setInitailState(true)}/>
  }

  return (
    <Routes>
       <Route element={<MainLayout/>}>
          <Route path='/' element={<Home />}/>
          <Route path='/works' element={<Works />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact/>}/>
       </Route>
    </Routes>
  )
}

export default App
