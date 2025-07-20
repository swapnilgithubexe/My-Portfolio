import { useEffect, useState } from 'react'
import './About.scss'
import Animation from '../AnimatedLetters/Animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <Animation
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', '', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            <h3>👋 Hi, I’m Swapnil Dutta. Welcome to My Portfolio!</h3>{' '}
          </p>
          <p>
            I’m a passionate and curious developer (and lifelong learner) with a
            strong focus on building meaningful, functional, and user-friendly
            digital experiences. This portfolio is a glimpse into my journey —
            my projects, my skills, and the kind of work I enjoy doing.
          </p>
          <p>
            Whether it's crafting clean, efficient code, solving real-world
            problems through software, or learning something new every day — I
            love what I do.{' '}
          </p>

          <p>
            You’ll find everything from hands-on development work to creative
            solutions I’ve built across various tools, stacks, and platforms.{' '}
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#5ED4F4" />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
