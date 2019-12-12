import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import Navbar from './components/Navbar'
import themeObject from './util/theme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import jwtDecode from 'jwt-decode'
import AuthRoute from './util/AuthRoute'
let authenticated
const theme = createMuiTheme(themeObject);
const token = localStorage.FBIdToken
if(token){
  const decodedToken = jwtDecode(token)
  // console.log(decodedToken);
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href = '/login'
    authenticated = false 
  } else {
    authenticated = true
  }
}
export class App extends Component {
  render() {
    return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="container">
        <Switch>
          <Route exact path="/" component={home} />
          <AuthRoute exact path="/login" component={login} authenticated={authenticated} />
          <AuthRoute exact path="/signup" component={signup} authenticated={authenticated} />
        </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
    )
  }
}

export default App
