import React from 'react'
import './Works.css'
import Marinus from '../../assets/marinus.png'
import Nics from '../../assets/nics.png'
import Jemkos from '../../assets/Jemkos.png'
import Vins from '../../assets/vins.png'
// import Img5 from '../../assets/portfolio-5.png'
// import Img6 from '../../assets/portfolio-6.png'


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
        <img src={Marinus} alt="project1" className="worksImg" />
        <img src={Jemkos} alt="project2" className="worksImg" />
        <img src={Nics} alt="project3" className="worksImg" />
        <img src={Vins} alt="project4" className="worksImg" />
        {/* <img src={Img5} alt="project5" className="worksImg" />
        <img src={Img6} alt="project6" className="worksImg" /> */}
      </div>
      <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works