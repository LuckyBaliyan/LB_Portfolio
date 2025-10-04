import React from 'react'
import MainBtn from '../buttons/MainBtn'

const ContactForm = () => {
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