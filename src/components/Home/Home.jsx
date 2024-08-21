import React, { useState, useEffect } from 'react'
import './Home.scss'
import logo_3 from '../../assets/images/logo_3.png'
import { Link } from 'react-router-dom'
import Animation from '../AnimatedLetters/Animation'
import ShiftLogo from './Logo/shiftLogoFunction'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['w', 'a', 'p', 'n', 'i', 'l']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} text-animate-12`}>i,</span>
            <br />
            <span className={`${letterClass} text-animate-13`}>I</span>
            <span className={`${letterClass} text-animate-14`}>'m</span>
            <img src={logo_3} alt="fullstackdeveloper" />
            <Animation
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          </h1>
          <br /> <br /> <br />
          <br /> <br />
          <br />
          <br />
          <h2>Full stack web developer / Python developer</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <ShiftLogo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home

// from 48:30
