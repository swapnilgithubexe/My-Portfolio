import React from 'react'
import './Animation.scss'

const Animation = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} text-animate-${i + idx} _${i + idx}`}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default Animation
