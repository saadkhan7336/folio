"use client"
import { RiHome3Fill, RiMailFill, RiPhoneFill } from 'react-icons/ri'
import './Contact.css'
import React from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  return (
    <section className="contact" id='contact'>
        <div className="title">
            <h4>Contact</h4>
            <h2>Get in touch</h2>
        </div>
        <div className="contact-container container">
            <div className="info">
                <div className="box">
                <div className="icon"><RiHome3Fill/></div>
                    <h4>Address </h4>
                    <span>Lahore,Punjab,Pakistan</span>
                </div>
                <div className="box">
                <div className="icon"><RiPhoneFill/></div>  
                    <h4>Phone</h4>
                    <span> +923204077809</span>
                </div>
                <div className="box">
                <div className="icon"><RiMailFill/></div>
                    <h4>Email</h4>
                    <span> saadahmadkhan627@gmail.com</span>
                </div>
            </div>
            <div className="contact-form" >
                <div className="form-name" >
                    <input type="text" name="First Name" placeholder='First Name' id="" required />
                    <input type="text" name="Last Name" placeholder='Last Name' id="" required />
                </div>
                <input type="email" name="Email Address" placeholder='info@yoursite.com' id="" required />
                <textarea name='Message' id='' rows="5" placeholder='Message' required></textarea>
                <div className="form-btn" >
                    <button type="submit" value="send" className='btn'>Send Message</button>
                </div>
            </div> 
        </div>
        <div className="copyright">
            <p>Copyright &copy;<a href='' >saadahmadkhan</a>|All rights reserved.</p>
        </div>
    </section>
  )
}

export default Contact