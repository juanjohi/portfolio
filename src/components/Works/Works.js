import React from 'react'
import './Works.css'
import Img1 from '../../assets/portfolio-1.png'
import Img2 from '../../assets/portfolio-2.png'
import Img3 from '../../assets/portfolio-3.png'
import Img4 from '../../assets/portfolio-4.png'
import Img5 from '../../assets/portfolio-5.png'
import Img6 from '../../assets/portfolio-6.png'


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
        <img src={Img1} alt="project1" className="worksImg" />
        <img src={Img2} alt="project2" className="worksImg" />
        <img src={Img3} alt="project3" className="worksImg" />
        <img src={Img4} alt="project4" className="worksImg" />
        <img src={Img5} alt="project5" className="worksImg" />
        <img src={Img6} alt="project6" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works