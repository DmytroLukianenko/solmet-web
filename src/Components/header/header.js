import Logo from './logo/logo'
import NavMenu from './navMenu/navMenu'
import StyledHeader from './headerStyled'
import BurgerMenu from './burgerMenu/burgerMenu'
import { useWindowWidth } from '@react-hook/window-size'

const Header = () => {
  const onlyWidth = useWindowWidth()

  return (
    <StyledHeader className="container">
      <Logo />
      {/* <NavMenu /> */}
      {onlyWidth > 767 ? <NavMenu /> : <BurgerMenu />}
      {/* <BurgerMenu /> */}
    </StyledHeader>
  )
}

export default Header
