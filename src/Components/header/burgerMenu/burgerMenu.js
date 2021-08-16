import { slide as Menu } from 'react-burger-menu'
import StyledBurgerMenu from './styledBurgerMenu'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import React, { useState, useContext } from 'react'

const BurgerMenu = () => {
  const [menuOpen, setMenuOpenState] = useState(false)
  const handleClick = () => {
    setMenuOpenState(!menuOpen)
  }

  return (
    <StyledBurgerMenu>
      <Menu right onOpen={handleClick} isOpen={menuOpen} onClose={handleClick}>
        <ul className="list">
          <li>
            <NavLink exact to="/" className="link" onClick={handleClick}>
              Домашняя
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link" onClick={handleClick}>
              О Нас
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/industrial" onClick={handleClick}>
              Посыпная(промышленая)
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/edible" onClick={handleClick}>
              Пищевая
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/bath" onClick={handleClick}>
              Таблетка
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/aft" onClick={handleClick}>
              Кормовая
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contacts" onClick={handleClick}>
              Контакты
            </NavLink>
          </li>
        </ul>
      </Menu>
    </StyledBurgerMenu>
  )
}
export default BurgerMenu
