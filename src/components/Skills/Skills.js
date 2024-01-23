
import React from 'react'
import './Skills.css'
import UiDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import Comp from '../../assets/comp.gif'


export const Skills = () => {
  return (
      <section id='skills' className='skills'>
          <span className='skillTitle'>
              What I Do 
          </span>
          <span className='skillDesc'>
              I am a passionate and skilled It Personell with knowledge and understanding in website design/development and also double as an It consultant 
              in both Hardware and software issues. 
          </span>
          <div className="skillBars">
              
              <div className="skillBar">
                  <img src={UiDesign} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                      <h2> Web UI/UX Design </h2>
                      <p>I am an architect of digital interactions, combining creativity with functionality to shape user experiences that leave a lasting impression. 
                        Creating intuitive and visually appealing interfaces.</p>
                  </div>
              </div>

              <div className="skillBar">
                  <img src={WebDesign} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                      <h2>Web Development </h2>
                      <p>A proficient Front and Backend developer,and a digital alchemist, turning ideas into interactive and dynamic web experiences.</p>
                  </div>
              </div>

              <div className="skillBar">
                  <img src={Comp} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                      <h2>IT Consultant</h2>
                      <p>With a passion for problem-solving and a commitment to client success,
                          I bring a wealth of expertise in navigating the intricate realm of information technology.</p>
                  </div>
              </div>

          </div>
    </section>
  )
}


export default Skills