import React from 'react'
import './about.css'
import ME from '../../assets/me_about.png'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiAtom } from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__card-icon' />
              <h5>Experience</h5>
              <small>4+ Years</small>
            </article>
            <article className='about__card'>
              <BiAtom className='about__card-icon' />
              <h5>Tecnologies</h5>
              <small>C# | C++ | Python | Unity | React</small>
            </article>
            <a href="#portfolio">
              <article className='about__card'>
                <VscFolderLibrary className='about__card-icon' />
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </a>
          </div>
          <p>
            Hello! I'm Leandro a Programmer/Developer based in Lisbon, Portugal with a big passion for Gameplay Programming.
            I also have experience in other fields such as AI, AR, VR, and Front/Back-End Development!
          </p>
          <p>
            I enjoy creating things like video games and applications that allow me to think outside the box while using
            a wide variety of technologies. My goal is to learn as much as possible while providing incredible
            experiences and keeping the systems behind them as clean and performant as possible.
          </p>
          <p>
            I have a bachelor's degree in VideoGames from <a href="https://www.ulusofona.pt/" target="blank">Lusófona University</a>,
            in which I developed several applications throughout the last 4 years, ranging from mobile apps, AR apps, VR
            games, Online Games, and even developing my own mini game engine for the Windows CMD. Having already
            previously obtained an EQF level 4 in Programming and Management of Computer Systems from
            <a href="https://ae-ginestalmachado.pt/">AEGM</a>.
          </p>
          <p>
            I'm currently in the process of finishing my Master's degree in Computer Engineering!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About