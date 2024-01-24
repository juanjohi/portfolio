import React from 'react'
import './Contact.css'


export const Contact = () => {
    return (
        <section className="contactPage" id='contact'>
            <div className="clients">
                <h1 className="clientsHeader">My Clients</h1>
                <p className="clientPara">I have had the oppurtunity to work with a diverse group of companies based in different sectors</p>

                <div className="companiesList">
                    <p className="company"> JEMKOS <br /> MAZERAS</p>
                    <p className="company"> MARINUS<br /> PLANTS</p>
                    <p className="company"> NICS <br /> BOREHOLES</p>
                    <p className="company"> VINS <br />BOREHOLES </p>
                </div>

            </div>
            <div className="contact">
                <h1 className="contactHeader">Contact Me</h1>
                <p className="contactPara">Fill Out the form below to discuss any work oppurtunities</p>
            </div>

            <form action="https://formsubmit.co/kennedywanjohi15@gmail.com" method='POST' className="contactForm">
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://wanjohi-portfolio.vercel.app/portfolio/thanks.html"></input>
                <input type="text" name='name' className="name" placeholder='Your Name' />
                <input type="email" name='email' className="email" placeholder='Your Email' />
                <textarea type="text" rows="5" className='msg' name='subject' placeholder='Your Message' />
                <button className="submitBtn" type='submit' value='send'> Submit </button>
            </form>

        </section>
    )
}

export default Contact