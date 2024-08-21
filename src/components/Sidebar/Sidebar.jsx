import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import logo_1 from '../../assets/images/logo_1.png'
import logo_2 from '../../assets/images/logo_2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faLaptopCode,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo">
        <img className="logo1" src={logo_1} alt="" />
        <img className="logo2" src={logo_2} alt="" />
      </Link>
      <nav>
        <NavLink activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink activeclassname="active" to="/about" className="about-link">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          to="/projects"
          className="project-link"
        >
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        {/* //1st link */}
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/swapnil-dutta-4b3385200/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        {/* //2nd link */}
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/swapnilgithubexe"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        {/* //3rd link */}
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.naukri.com/code360/profile/c0b1c7cf-08ce-4f80-b810-217dce3051e8"
          >
            <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
