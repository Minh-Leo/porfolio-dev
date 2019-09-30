import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import home from "./pages/home";
import projects from "./pages/projects";
import about from "./pages/about";

import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={home} />
            <Route exact path='/projects' component={projects} />
            <Route exact path='/about' component={about} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
