import styled from 'styled-components'
import hero from '../../assets/images/hero2.jpg'

const StyledMainPage = styled.div`
  color: white;
  width: 100%;
  height: 400px;
  text-align: center;
  padding: 80px 0;

  background-image: linear-gradient(
      black,
      transparent 40%,
      transparent 80%,
      black
    ),
    url(${hero});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  h2 {
    margin: 0;
    font-size: 48px;
  }
  h3 {
    font-size: 22px;
  }
`
export default StyledMainPage
