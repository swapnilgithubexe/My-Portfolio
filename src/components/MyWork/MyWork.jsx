import ReactCardCarousel from 'react-card-carousel'
import { data } from '../../assets/contants/data' // assuming data is an array
import './myWork.scss'
import Card from './Card'
const CARD_STYLE = {
  height: '400px',
  width: '400px',
  paddingTop: '80px',
  textAlign: 'center',
  color: 'yellow',
  fontSize: '12px',
  textTransform: 'uppercase',
  borderRadius: '10px',
  background: 'rgba(29, 78, 2, 0.2)', // translucent green
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 0, 0.3)',
  boxShadow: `
    0 4px 20px rgba(255, 255, 0, 0.4),      /* soft outer yellow glow */
    inset 0 0 1px rgba(255, 255, 0, 0.2)   /* soft inner yellow glow */
  `,
}

const MyWork = () => {
  return (
    <div className="carousel-container">
      <ReactCardCarousel autoplay={true} autoplay_speed={3500}>
        {data.map((item, index) => (
          <Card style={CARD_STYLE} item={item} key={index} />
        ))}
      </ReactCardCarousel>
    </div>
  )
}

export default MyWork
