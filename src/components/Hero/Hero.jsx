import { RiFacebookBoxFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri'
import './Hero.css'
import React from 'react'
import Image from 'next/image'
const Hero = () => {
    return (
        <section className='home' id='home'>
            <div className="home-container container">
                <div className="content">
                    <h4> Hey There!</h4>
                    <h1>I'm Saad Ahmad Khan</h1>
                    <p>I’m specialized in Front-End Development,
                        where my skills encompass creating polished user interfaces through meticulous HTML and CSS work.
                        With a strong command of JavaScript, I bring interactivity to web applications,
                        ensuring a seamless user experience. My proficiency extends to responsive design.</p>
                    <div className="home-btns">
                        <button className="btn"><a href='./cv/saad ahmad khancv.pdf' download='saad ahmad khancv.pdf'>Download cv</a></button>
                        <button className="btn btn-2"><a href='#contact'>Hire me</a></button>
                    </div>
                    <div className="social-icons">
                        <a href=''> <RiFacebookBoxFill/> </a>
                        <a href='https://wa.me/+923204077809'target='_blank'> <RiWhatsappFill/> </a>
                        <a href='https://github.com/saadkhan7336'target="_blank"> <RiGithubFill/> </a>
                        <a href='www.linkedin.com/in/saad-ahmad-khan-6b5792211'target="_blank"> <RiLinkedinFill/> </a>
                    </div>
                </div>
                <div className="image">
                    <img src='./images/bg3.png' alt=''/>
                </div>
            </div>
        </section>
    )
}

export default Hero