import React from 'react'
import Transition from '../animations/pageTransition/Transition'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'

const Contact = () => {
  return (
    <>
      <Nav/>
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