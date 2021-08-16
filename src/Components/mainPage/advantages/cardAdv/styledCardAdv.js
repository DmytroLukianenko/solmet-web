import styled from 'styled-components'
import happy from '../../../../assets/svg/happy-client.svg'
import quality from '../../../../assets/svg/quality.svg'
import intime from '../../../../assets/svg/intime.svg'

const StyledCardAdv = styled.div`
  p {
    color: white;
  }

  div {
    align-items: center;
    width: 150px;
    height: 150px;
    background-color: #302b63;

    margin-left: auto;
    margin-right: auto;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }
  .happy::before,
  .quality::before,
  .intime::before {
    display: block;
    content: '';
    background: url(${happy});
    width: 50px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  .quality::before {
    background: url(${quality});
  }
  .intime::before {
    background: url(${intime});
  }
  .react-icons {
    width: 25px;
    height: 25px;
    /* height: 100px; */
    fill: #648dc1;
  }
`
export default StyledCardAdv
