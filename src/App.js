import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route ,Switch} from "react-router-dom"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"

//Component import
import NavBar from "./Components/NavBar"

//Page imports
import home from './Pages/home'
import signup from './Pages/signup'
import login from './Pages/login'

const theme=createMuiTheme({
  palette: {
    primary: {
      main:"#ff5722"
    },
    secondary: {
      main: '#ffa726',
    },
  }
})

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <NavBar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} ></Route>
              <Route exact path="/signup" component={signup} ></Route>
              <Route exact path="/login" component={login} ></Route>
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
