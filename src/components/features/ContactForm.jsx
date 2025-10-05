import React, { useEffect, useRef, useState } from 'react'
import MainBtn from '../buttons/MainBtn'
import emailjs from 'emailjs-com';
const ContactForm = () => {

  const serviceId =   import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const serviceKey =   import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData,setFormData] = useState({
    name:'',
    email:'',
    message:'',
  });

  const [status,setStatus] = useState('Send');
  const btnRef = useRef(null);

  const audio = new Audio('/audio/sent.mp3');

  useEffect(()=>{
    if(status === 'Thank You'){
        audio.play().catch((error)=>console.warn('Audio not working',error));
    }
  },[status]);

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(
        serviceId,
        templateID,
        formData,
        serviceKey
    ).then(()=>{
        setStatus('Thank You');
        setTimeout(()=>{
            setFormData({name:"",email:"",message:""});
            setStatus('Send');
        },1000)
    }
    ).catch((error)=>{
        console.log(error);
        setStatus('Something went wrong');
        setTimeout(()=>{
            setFormData({name:'',email:'',message:''});
            setStatus('Send');
        },1000)
    })

  }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
        autoComplete='off'
        spellCheck='false'
        />
        <input type="email"
         placeholder='youremail@gmail.com'
         name='email'
         value={formData.email}
         onChange={handleChange}
         required 
         autoComplete='off'
         spellCheck='false'
         />
        <textarea 
        name="message" 
        draggable='false'
        placeholder='Message'
        required
        value={formData.message}
        onChange={handleChange}
        autoComplete='off'
        spellCheck='false'
        />
        <button disabled={status !== 'Send'} ref={btnRef} type='submit' className={`contact-btn ${status !== 'Send'?'!cursor-progress':"!cursor-pointer"}`}>
            {status}
        </button>
    </form>
  )
}

export default ContactForm