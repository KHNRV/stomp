import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScoringTable from "./components/ScoringTable";
import ResultsTable from "./components/ResultsTable";
import Stepper from "./components/Stepper";

import { compData, columns } from "./data";

import "./styles/app.scss";

function App() {
  const [data, setData] = useState(compData);

  return (
    <div className="App">
      <h1>Stomp</h1>
      <Router>
        <Switch>
          <Route exact path="/scoring">
            <ScoringTable data={data} setData={setData} columns={columns} />
          </Route>
          <Route exact path="/results">
            <ResultsTable data={data} columns={columns} />
          </Route>
          <Route path="/"></Route>
        </Switch>
        <Stepper />
      </Router>
    </div>
  );
}

export default App;
