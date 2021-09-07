import StyledServiceCard from './styledServiceCard'
import { Link } from 'react-router-dom'

const ServiceCard = ({ link, name, description, page }) => {
  return (
    <StyledServiceCard className="snip1418">
      <img
        // src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample85.jpg"
        src={link}
        alt={name}
      />
      <figcaption>
        <h3>{name}</h3>
        <p>{description}</p>
      </figcaption>
      <Link to={page}>Подробнее</Link>
      {/* <a href={page}> Подробнее </a> */}
    </StyledServiceCard>
  )
}
export default ServiceCard
