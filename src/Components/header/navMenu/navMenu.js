import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import StyledNavMenu from './styledNavMenu'

const NavMenu = () => {
  return (
    <StyledNavMenu className="circle">
      <ul className="list">
        <li>
          <NavLink exact to="/">
            Домашняя
          </NavLink>
        </li>
        <li>
          <NavLink to="/industrial">Посыпная(промышленая)</NavLink>
        </li>
        <li>
          <NavLink to="/edible">Пищевая</NavLink>
        </li>
        <li>
          <NavLink to="/bath">Таблетка</NavLink>
        </li>
        <li>
          <NavLink to="/aft">Кормовая</NavLink>
        </li>
      </ul>
    </StyledNavMenu>
  )
}

export default NavMenu
