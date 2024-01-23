
import React from 'react'
import './intro.css'
// import introImg from '../../assets/image.png'
import buddies from '../../assets/tech3.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

export const Intro = () => {
  return (
      <section id='intro'>
          <div className='introContent'>
              <span className='hello'>Hello,</span>
              <span className='introText'>I'm <span className='introName'>Wanjohi</span> <br />
                 A Website Developer/ It Consultant</span>
              <p className='introPara'>I'm a skilled web developer/designer creating stunning websites <br/> with immersive visuals and functionality <br />
                  And also practice as an It Consultant/Technician <br/> With knowledge in solving both S/W and H/W problems</p>
              
              <Link><button className='btn'><img src= {btnImg} className='btnImg' alt='hire' /> Hire me </button></Link>
              
          </div>
          <img src={buddies} alt='introImg' className='bg'/>
   </section>
  )
}

export default Intro