import StyledCardAdv from './styledCardAdv'
import { ImHappy } from 'react-icons/im'
import { IconContext } from 'react-icons'

const CardAdv = () => {
  return (
    <>
      <StyledCardAdv>
        <div>
          <p className="happy">Довольный клиент</p>
          <IconContext.Provider value={{ className: 'react-icons' }}>
            <ImHappy />
          </IconContext.Provider>
        </div>
        <div>
          <p className="intime">Своевременная доставка</p>
        </div>
        <div>
          <p className="quality">Гарантия качества</p>
        </div>
      </StyledCardAdv>
    </>
  )
}
export default CardAdv
