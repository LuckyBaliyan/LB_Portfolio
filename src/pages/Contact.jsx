import React,{useRef} from 'react'
import Transition from '../animations/pageTransition/Transition'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import Menu from '../components/header/Menu'
import ContactForm from '../components/features/ContactForm'
import TextUP from '../animations/Reavel/TextUP'
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => {

  const whatsappClick = ()=>{
    const phoneNumber = '9759940199';
    const message = encodeURIComponent('Hi Lucky, I saw your portfolio and would like to connect!');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink,'_blank');
  }

  return (
    <>
      <Nav/>
      <div className="fixed top-4 right-4 opacity-100 pointer-events-auto z-[800]">
       <Menu />
      </div>
      <section>
        <div className='w-full min-h-screen h-full bg-[#121212] rounded-b-4xl py-16'>
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
        <div className='w-full h-screen p-2 md:p-6'>
          <div className="contact-wrapper relative w-full h-full bg-[#121212] rounded-lg overflow-hidden">
             <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
               <h4 className='text-[var(--textWhite)]'>Let's Create Something Extraordinary Together 
                <button onClick={whatsappClick} className='text-xl flex gap-2 mt-2 items-center main-btn !text-[#121212] !bg-[var(--textWhite)]'><FaWhatsapp /> Chat with me</button>
               </h4>
             </div>
             <div className="absolute bottom-[10%] md:left-[20%]  lg:bottom-4 lg:left-[55%] z-20 hidden md:block w-2/3 lg:w-2/5">
              <p className='text-[var(--textWhite)]'>
                Step into the future of design and development with a partnership built on innovation and creativity. 
                Whether you have a project in mind or just want to say hello, I’m here to turn your ideas into digital reality. 
                Reach out and let’s build something that stands out in a world of endless possibilities.
              </p>
             </div>
             <div className="video-wrapper flex justify-center items-center">
               <video muted loop autoPlay src="/videos/contact2.mp4" className='w-full h-full object-cover' />
             </div>
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