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
      <a className='text-white text-xl font-bold justify-center items-start' href="tel:+919166538689"> +919166538689</a>
      <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>

      </nav>
    </div>
  )
}

export default Header
