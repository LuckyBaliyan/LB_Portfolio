import React from 'react'
import Transition from '../animations/pageTransition/Transition'
import Nav from '../components/header/Nav';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <nav>
          <Nav/>
      </nav>
      <section>
        <h1>Home</h1>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Transition(Home);