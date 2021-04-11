import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScoringTable from "./components/ScoringTable";
import ResultsTable from "./components/ResultsTable";
import Stepper from "./components/Stepper";

import stateData from "./data";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <h1>Stomp</h1>

      <Router>
        <Switch>
          <Route exact path="/scoring" component={ScoringTable}></Route>
          <Route exact path="/results" component={ResultsTable}></Route>
          <Route path="/"></Route>
        </Switch>
        <Stepper />
      </Router>
    </div>
  );
}

export default App;
