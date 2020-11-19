import React from "react";

import {Container} from "./components/common/index";
import * as serviceWorker from './serviceWorker';
import Home from "./views/Home";
import About from "./views/About";

import {Banner, Services} from "./components/sections"

// common components
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import "./sass/index.scss";

export default function App() {
  return (
    <div className="App">
      <Router>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Header />
            <Container width_type="wrap">
              {switchPage()}
            </Container>
            <Banner />
            <Services />
        </AnimatedSwitch>
      </Router>
    </div>
  );
}

function switchPage() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
