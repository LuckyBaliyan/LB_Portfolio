import React from 'react'
import MainBtn from '../buttons/MainBtn'

const ContactForm = () => {

  const serviceId =   import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const serviceKey =   import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log(serviceId,serviceKey,templateID);

  return (
    <form action="">
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email' />
        <textarea name="message" id="" draggable='false'></textarea>
        <MainBtn text={'Send'} />
    </form>
  )
}

export default ContactForm