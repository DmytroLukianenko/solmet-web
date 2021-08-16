import GlobalStyle from './assets/globalStyles/globalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/header/header'
import MainPage from './Components/mainPage/mainPage'

const Test = () => {
  return <h1>industrial</h1>
}
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        {/* <Router basename="/test"> */}
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/about" component={() => <h1>about?</h1>} />
          <Route path="/industrial" component={Test} />
          <Route path="/edible" component={() => <h1>Пищевая</h1>} />
          <Route path="/bath" component={() => <h1>для воды</h1>} />
          <Route path="/aft" component={() => <h1>для зверей</h1>} />
          <Route path="/contacts" component={() => <h1>contact us</h1>} />
        </Switch>
      </Router>
    </>
  )
}

export default App
