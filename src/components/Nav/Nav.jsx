"use client"
import './Nav.css'
import React, { useState } from 'react'
import {RiMenu3Fill,RiCloseFill} from "react-icons/ri"

const Nav = () => {
const[menuOpened, setMenuOpened]= useState(false);
    return (
        <nav>
            {/*for desktop version*/}
            <div className="nav-container container">
                <div className="logo">
                    <a href='#'><span>Port</span>folio</a>
                </div>
                <ul className="navlist">
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>about</a></li>
                    <li><a href='#services'>services</a></li>
                    <li><a href='#pages'>pages</a>
                        <ul className="submenu">
                            <li><a href='#portfolio'>portfolio</a></li>
                            <li><a href=''>portfolio details</a></li>
                        </ul>
                    </li>
                    <li><a href='#testimonial'>Testimonial</a></li>
                    <li><a href='#contact'>Contact Me</a></li>
                </ul>
            </div>

            {/* Mobile version  */}
            <div className="nm-container container">
            <div className="logo">
                    <a href='#'><span>Port</span>folio</a>
                </div>
                {!menuOpened ?
                <RiMenu3Fill size={30} onClick={()=> setMenuOpened(true)}/>:
                <RiCloseFill size={30} onClick={()=> setMenuOpened(false)}/> 
                

                }
                
                <ul className="navlist" style={{ transform: menuOpened && "translateX(0%)"}}>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>about</a></li>
                    <li><a href='#services'>services</a></li>
                    <li><a href='#pages'>pages</a>
                        <ul className="submenu">
                            <li><a href='#portfolio'>portfolio</a></li>
                            <li><a href=''>portfolio details</a></li>
                        </ul>
                    </li>
                    <li><a href='#testimonial'>Testimonial</a></li>
                    <li><a href='#contact'>Contact Me</a></li>
                </ul>
            </div>


        </nav>
    )
}

export default Nav