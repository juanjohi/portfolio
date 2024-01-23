
import React from 'react'
import './intro.css'
import buddies from '../../assets/tech3.png'
// import btnImg from '../../assets/hireme.png'
// import { Link } from 'react-scroll'
import Down from '../../assets/download.gif'
import Cv from '../../assets/KennedyCV.pdf'

export const Intro = () => {
  return (
      <section id='intro'>
          <div className='introContent'>
              <span className='hello'>Hello,</span>
              <span className='introText'>I'm <span className='introName'>Wanjohi</span> <br />
                 A Website Developer/ It Consultant</span>
              <p className='introPara'>I'm a skilled web developer/designer creating stunning websites <br/> with immersive visuals and functionality <br />
                  And also practice as an It Consultant/Technician <br/> With knowledge in solving both S/W and H/W problems</p>
              {/* <Link to={Cv} target='blank' dowload="resume.pdf"> </Link> */}
              <a href={Cv} download="KennedyCv.pdf"> <button className='btn'><img src={Down} className='btnImg' alt='hire' /></button> </a>
              
          </div>
          <img src={buddies} alt='introImg' className='bg'/>
   </section>
  )
}

export default Intro