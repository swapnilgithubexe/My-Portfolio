import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useParams } from 'react-router-dom'
import { data } from '../../assets/contants/data'
import './Project.css'

const ProjectCard = () => {
  const { id } = useParams()
  const project = data.find((project) => project.id === id)
  return (
    <div className="card">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000} // time in ms between slides
        stopOnHover
        showArrows
        showStatus={false}
      >
        {project.img.map((src, i) => (
          <div key={i}>
            <img src={src} alt={`Project ${i + 1}`} />
          </div>
        ))}
      </Carousel>
      <h3 style={{ fontSize: '20px', color: 'green', fontWeight: '900' }}>
        {project.projectName}
      </h3>
      <p style={{ fontSize: '20px', color: 'green', fontWeight: '900' }}>
        Description: {project.description}
      </p>

      <button
        onClick={() =>
          window.open('https://reminisce-v1-alpha.onrender.com', '_blank')
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 74 74"
          height="34"
          width="34"
        >
          <circle
            stroke-width="3"
            stroke="black"
            r="35.5"
            cy="37"
            cx="37"
          ></circle>
          <path
            fill="black"
            d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default ProjectCard
