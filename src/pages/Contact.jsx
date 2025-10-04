import React,{useRef} from 'react'
import Transition from '../animations/pageTransition/Transition'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import Menu from '../components/header/Menu'
import ContactForm from '../components/features/ContactForm'
import TextUP from '../animations/Reavel/TextUP'

const Contact = () => {

  return (
    <>
      <Nav/>
      <div className="fixed top-4 right-4 opacity-100 pointer-events-auto z-[800]">
       <Menu />
      </div>
      <section>
        <div className='w-full min-h-screen h-full bg-[#121212] py-16'>
          <div className='flex items-center justify-center'>
            <TextUP  text={'Get'} secText={'In Touch'} color={'--textWhite'}/>
          </div>
          <div className='w-full flex items-center justify-center mt-6'>
            <p className='text-center text-[var(--textWhite)] text-xl'>Leave a Message for me</p>
          </div>
          <div className='w-full flex items-center justify-center mt-12'>
           <div className='px-4 py-2 w-[90%] md:w-[75%] lg:w-1/2'>
             <ContactForm />
            </div>
          </div>
        </div>
        <div>
          <div className="contact-wrapper relative">
             
          </div>
        </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Transition(Contact);