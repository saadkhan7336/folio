import { folioData } from '@/utils/data'
import './Portfolio.css'
import React from 'react'
import { RiExternalLinkFill } from 'react-icons/ri'

const Portfolio = () => {
  return (
<section className="portfolio" id='portfolio'>
    <div className="title">
        <h4>Recent Projects</h4>
        <h2>Work I done</h2>
    </div>
    <div className="portfolio-btns container">
        <div className="portfolio-tab">All</div>
        <div className="portfolio-tab">FrontEnd</div>
        <div className="portfolio-tab">React JS</div>
    </div>
    <div className="portfolio-container container">
        {
            folioData.map((box,i)=>(
                <div className="box" key={i}>
                    <img src={box.src} alt={box.src}/>
                    <div className="layer">
                        <h3>{box.title}</h3>
                        <p>{box.des} </p>
                        <a href=''> <RiExternalLinkFill/></a>
                    </div>
                </div>
            ))
        }
    </div>
</section>
    )
}

export default Portfolio