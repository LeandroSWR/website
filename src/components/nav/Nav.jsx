import React from 'react'
import './nav.css'
import {IoHome} from 'react-icons/io5'
import {FaUser, FaBook, FaGamepad} from 'react-icons/fa'
import {RiServiceFill, RiMessage2Fill} from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href="#"><IoHome /></a>
      <a href="#about"><FaUser /></a>
      <a href="#experience"><FaBook /></a>
      <a href="#services"><RiServiceFill /></a>
      <a href="#portfolio"><FaGamepad /></a>
      <a href="#contact"><RiMessage2Fill /></a>
    </nav>
  )
}

export default Nav