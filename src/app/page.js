import Image from 'next/image'
import styles from './page.module.css'
import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Services from '@/components/Services/Services'
import Portfolio from '@/components/Portfolio/Portfolio'
import Testimonial from '@/components/Testimonial/Testimonial'
import Contact from '@/components/Contact/Contact'
export default function Home() {
  return (
    <div className='app'>
      <Nav/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>

    </div>
  )
}
