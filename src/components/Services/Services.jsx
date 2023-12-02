import { tabData } from '@/utils/data'
import './Services.css'
import React from 'react'

const Services = () => {
  return (
<section className="serivices" id='services'>
    <div className="title">
        <h4>MY Services</h4>
        <h2>Services I Provide</h2>         
    </div>
    <div className="services-container container">
        <div className="left">
            <div className="tab-buttons">
                {
                    tabData.map((tab,i)=>(
                        <div className="tab-btn" key={i}>
                            <div className="tab-icon">
                                {tab.icon}
                            </div>
                            <div>
                                <h4>{tab.title}</h4>
                                <span>{tab.quantity}</span>
                            </div>
                        </div>
                        

                    ))
                }
            </div>
        </div>
        <div className="right">
            <h3>Frontend</h3>
            <p>As a frontend developer, I specialize in crafting visually stunning and responsive websites, utilizing my expertise in HTML, CSS, and JavaScript.</p>
                  <br/>
                  <p> My services include creating intuitive user interfaces with popular frameworks like React.I focus on making sure websites look good on all browsers and run fast.</p>
                    <br/>
                    <p> My goal is to create websites that are easy to use and look great on phones, tablets, and computers.</p>
        </div>
    </div>
</section>
    )
}

export default Services