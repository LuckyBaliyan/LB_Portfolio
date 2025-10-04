import React,{useRef} from 'react'
import Transition from '../animations/pageTransition/Transition'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import Menu from '../components/header/Menu'
import ContactForm from '../components/features/ContactForm'

const Contact = () => {

  const serviceId =   import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const serviceKey =   import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log(serviceId,serviceKey,templateID);

  return (
    <>
      <Nav/>
      <div className="fixed top-4 right-4 opacity-100 pointer-events-auto z-[800]">
       <Menu />
      </div>
      <section>
        <h1>Contact</h1>
        <ContactForm />
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Transition(Contact);