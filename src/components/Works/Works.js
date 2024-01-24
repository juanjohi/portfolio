import React from 'react'
import './Works.css'
import Marinus from '../../assets/marinus.png'
import Jemkos from '../../assets/Jemkos.png'
import Vins from '../../assets/vins.png'
import Nics from '../../assets/nics.png'
import Bino from '../../assets/binoculars.gif'


export const Works = () => {
  return (
    <section id='works'>
      <div className="worksHeader">
        My Portfolio
      </div>
      <div className="worksPara">
        I take pride in the little details and pixels to perfection to my cleints needs and wants.
        I am excited to bring my expertise and skills to help businesses and individuals achieve their goals and vision
      </div>
      <div className="workImgs">

        <div className="container">
          <img src={Marinus} alt="project1" className="worksImg" style={{ width: '350px', height: '400px;' }} />
          <div className="middle">
            <div className="look"> <a href="https://marinusplantations.com/" target="_blank" rel="noreferrer"> <button className='btnWork'><img src={Bino} className='btnImg' alt='hire' /></button></a></div>
          </div>
        </div>
        <div className="container">
        <img src={Jemkos} alt="project2" className="worksImg" style={{width:'350px',height:'400px;'}}/>
          <div className="middle">
            <div className="look"> <a href="https://juanjohi.github.io/Jemkos/" target="_blank" rel="noreferrer"> <button className='btnWork'><img src={Bino} className='btnImg' alt='hire' /></button></a></div>
          </div>
        </div>

        <div className="container">
        <img src={Nics} alt="project3" className="worksImg" style={{width:'350px',height:'400px;'}}/>
          <div className="middle">
            <div className="look"> <a href="https://nicsdrillingcompany.co.ke/" target="_blank" rel="noreferrer"> <button className='btnWork'><img src={Bino} className='btnImg' alt='hire' /></button></a></div>
          </div>
        </div>

        <div className="container">
        <img src={Vins} alt="project4" className="worksImg" style={{width:'350px',height:'400px;'}}/>
          <div className="middle">
            <div className="look"> <a href="https://juanjohi.github.io/vins/" target="_blank" rel="noreferrer"> <button className='btnWork'><img src={Bino} className='btnImg' alt='hire' /> </button></a> </div>
          </div>
        </div>
      
      </div>
      <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works