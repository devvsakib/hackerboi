import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q1zylb7', 'template_pjj1qrv', form.current, 'yhZJ17XKfdLwMnnEE')
    e.target.reset()
  }; 

return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  <section id='contact'>
  <h5>Get in Touch!</h5>
  <h2>Contact ME</h2>
  <div className="container contact_container">
  <div className="contact_options">
  <article className="contact_option">
  <HiOutlineMail className='contact_option-icon'/>
  <h4>Email</h4>
  <h5>dummyemail@gmail.com</h5>
  <a href="mailto:dummyemail@gmail.com" target="_blank">Send a Message!</a>
  </article>

  <article className="contact_option">
  <BsMessenger className='contact_option-icon'/>
  <h4>Messenger</h4>
  <h5>aura.aman</h5>
  <a href="https://m.me/earnest.achiever" target="_blank">Send a Message!</a>
  </article>

  <article className="contact_option">
  <AiOutlineWhatsApp className='contact_option-icon'/>
  <h4>WhatsApp</h4>
  <h5>+91-9792118754</h5>
  <a href="https://api.whatsapp.com/send?phone=+9792118754" target="_blank">Send a Message!</a>
  </article>
  
  </div>
  {/*End of Contact Options*/}

  <form ref={form} onSubmit={sendEmail}>
  <input type="text" name='name' placeholder='Your Full Name' required />
  <input type="email" name='email' placeholder='Your Email' required />
  <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
  <button type="submit" className='btn btn-primary'>Send Message</button>
  </form>
  </div>
   </section>
  )
}

export default contact
