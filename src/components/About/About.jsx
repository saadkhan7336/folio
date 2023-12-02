import { techData } from '@/utils/data'
import './About.css'
import React from 'react'

const About = () => {
    return (
        <section className="about" id='about'>
            <div className="about-container container">
                <div className="left">
                    <div className="title">
                        <h4>About Myself</h4>
                        <h2>Who i am?</h2>
                    </div>
                    <p>As a frontend developer, I am passionate about bringing digital experiences to life. My expertise lies in creating appealing and user-friendly websites.I thrive on turning design concepts into interactive and responsive interfaces, making sure that the websites I build are easy to navigate across different devices.</p>
                    <div className="tech-container">
                        {
                            techData.map((card, i) => (
                                <div className="card" key={i}>
                                    <h4>{card.nmbrs}</h4>
                                    <span>{card.des}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="right">
                    <h3>Strength & Skills</h3>
                    <div className="tools-container">
                        <div className="tool">
                            <p>HTML 90%</p>
                            <span></span>
                        </div>
                        <div className="tool">
                            <p>CSS 80%</p>
                            <span></span>
                        </div>
                        <div className="tool">
                            <p>JavaScript 70%</p>
                            <span></span>
                        </div>
                        <div className="tool">
                            <p>React 80%</p>
                            <span></span>
                        </div>
                        <div className="tool">
                            <p>BootStrap 90%</p>
                            <span></span>
                        </div>
                        <div className="tool">
                            <p>Github 75%</p>
                            <span></span>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About