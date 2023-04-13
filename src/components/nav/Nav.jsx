import React from 'react'
import './nav.css'
import {IoHome} from 'react-icons/io5'
import {FaUser, FaBook, FaGamepad} from 'react-icons/fa'
import {RiServiceFill, RiMessage2Fill} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={getActiveState(activeNav, '#')}><IoHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={getActiveState(activeNav, '#about')}><FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={getActiveState(activeNav, '#experience')}><FaBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={getActiveState(activeNav, '#services')}><RiServiceFill /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={getActiveState(activeNav, '#portfolio')}><FaGamepad /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={getActiveState(activeNav, '#contact')}><RiMessage2Fill /></a>
    </nav>
  )
}

function getActiveState(activeNav, state)
{
  return activeNav === state ? 'active' : '';
}

export default Nav