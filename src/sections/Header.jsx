import React, { useState } from 'react'
// import {faXmark, faBars} from 'react-icons'
import {link} from 'react-scroll'

function Header() {
  const [ismenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = ()=>{
    setIsMenuOpen(!ismenuOpen)
  }
  
  const closeMenu = ()=>{
    setIsMenuOpen(false)
  }

  const navItems = [
    {
      link:'Home', path:'home'
    },
    {
      link:'About', path:'about'
    },
    {
      link:'Services', path:'services'
    },
    {
      link:'Projects', path:'projects'
    },
    {
      link:'Contact', path:'contact'
    },
  ]
  return (
    <div>
      {/* <a className='text-white text-xl font-bold justify-center items-start' href="tel:+919166538689"> +919166538689</a> */}
    </div>
  )
}

export default Header
