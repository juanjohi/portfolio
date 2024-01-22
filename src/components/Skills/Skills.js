
import React from 'react'
import './Skills.css'
import UiDesign from '../../assets/ui-design.png'
import AppDesign from '../../assets/app-design.png'
import WebDesign from '../../assets/website-design.png'

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
                      <h2> UI Design </h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium illo illum veritatis.</p>
                  </div>
              </div>

              <div className="skillBar">
                  <img src={WebDesign} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                      <h2>Web Design </h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium illo illum veritatis.</p>
                  </div>
              </div>

              <div className="skillBar">
                  <img src={AppDesign} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                      <h2>App Design </h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium illo illum veritatis.</p>
                  </div>
              </div>

          </div>
    </section>
  )
}


export default Skills