import React from 'react'
import Transition from '../animations/pageTransition/Transition'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'

const Works = () => {
  return (
    <>
      <Nav/>
      <section>
        <h1>Works</h1>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Transition(Works);