import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo'/>
      <div className='desktopMenu'>
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={800} className='desktopMenuListItem'>Home</Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={1000} className='desktopMenuListItem'>About</Link>
        <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={1000} className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-30} duration={1000} className='desktopMenuListItem'>Contact</Link>
      </div>

      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
      }}>
        <img src={contactImg} alt='' className='desktopMenuImg' /> Contact Me
      </button>

      <img src={menu} alt="mobmenu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display:showMenu? 'flex': 'none'}}>
        <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={800} className='listItem' onClick={false}>Home</Link>
        <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={1000} className='listItem' onClick={false}>About</Link>
        <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={1000} className='listItem' onClick={false}>Portfolio</Link>
        <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-30} duration={1000} className='listItem' onClick={false}>Contact</Link>
      </div>
   </nav>
  )
}

export default Navbar