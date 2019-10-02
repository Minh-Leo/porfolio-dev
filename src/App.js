import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import About from "./pages/about";

import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
