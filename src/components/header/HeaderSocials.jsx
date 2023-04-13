import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
import {FaArtstation} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/leandro-bras/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/LeandroSWR" target='_blank'><BsGithub /></a>
        <a href="https://twitter.com/LeandroSWR" target='_blank'><BsTwitter /></a>
        <a href="https://www.artstation.com/xshadowalker" target='_blank'><FaArtstation /></a>
    </div>
  )
}

export default HeaderSocials