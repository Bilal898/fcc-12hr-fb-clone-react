import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import Navbar from './components/Navbar'
import themeObject from './util/theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme(themeObject);

export class App extends Component {
  render() {
    return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="container">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={signup} />
        </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
    )
  }
}

export default App
