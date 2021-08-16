import Header from '../header/header'
import Advantages from './advantages/advantages'
import Services from './services/services'
import StyledMainPage from './styledMainPage'

const MainPage = () => {
  return (
    <>
      <StyledMainPage>
        {/* <Header /> */}
        <h2>Solmet</h2>
        <h3> Является дистрибьютором высококачественной соли </h3>
      </StyledMainPage>
      <Advantages />
      <Services />
    </>
  )
}

export default MainPage
