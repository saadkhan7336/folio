import { authorData } from '@/utils/data'
import './Testimonial.css'
import React from 'react'

const Testimonial = () => {
    return (
        <section className="testimonial" id='testimonial'>
            <div className="testimonial-container container">
                <div className="left">
                    <div className="title">
                        <h4>Testimonial</h4>
                        <h2>My Senior Feedback</h2>
                    </div>
                    <p>"Exceptional Frontend Developer: Transforming design visions into flawless user interfaces with technical precision and an unwavering commitment to innovation."</p>
                </div>
                <div className="right has-scrollbar">
                    {
                        authorData.map((card, i) => (
                            <div className="author" key={i}>
                                <div className="row">
                                    <img src={card.src} alt={card.src} />
                                
                                <div>
                                    <h4>{card.title}</h4>
                                    <p>{card.det}</p>
                                </div>
                            </div>
                            <p>{card.comnts}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonial