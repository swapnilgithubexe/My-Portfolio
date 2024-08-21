import React, { useEffect, useRef, useState } from 'react'
import './Contact.scss'
import Loader from 'react-loaders'
import Animation from '../AnimatedLetters/Animation'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      await emailjs.sendForm(
        'SERVICE_ID',
        'TEMPLATE_ID',
        refForm.current,
        'USER_ID'
      )

      alert('Message sent successfully!')
      window.location.reload(false)
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send the message, try again')
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animation
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>Hi, I am Swapnil!</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={submitHandler}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="half subject">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Swapnil Dutta,
          <br />
          Singrauli, MP
          <br />
          India
          <br />
          <span>
            7999600540 <br />
            swapnildutta2002@gmail.com
          </span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[24.195897404435893, 82.6645905595682]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[24.195897404435893, 82.6645905595682]}>
              <Popup>This is my home, Singrauli</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
