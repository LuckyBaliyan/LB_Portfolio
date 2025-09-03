import React,{useRef} from 'react'
import Transition from '../animations/pageTransition/Transition'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import Menu from '../components/header/Menu'

const Contact = () => {

  return (
    <>
      <Nav/>
      <div className="fixed top-4 right-4 opacity-100 pointer-events-auto z-[800]">
       <Menu />
      </div>
      <section>
        <h1>Contact</h1>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Transition(Contact);