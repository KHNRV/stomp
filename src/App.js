import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Competition from "./components/Competition";
import ScoringTable from "./components/ScoringTable";
import ResultsTable from "./components/ResultsTable";
import Stepper from "./components/Stepper";

import { compData, compCol } from "./data";

import "./styles/app.scss";

function App() {
  const [data, setData] = useState(compData);
  const [columns, setColumns] = useState(compCol);


  return (
    <div className="App">
      <h1>Stomp</h1>
      <Router>
        <Stepper />
        <Switch>
          <Route exact path="/competitions/:id/">
            <Competition data={data} setData={setData} columns={columns} setColumns={setColumns} />
          </Route>
          <Route exact path="/competitions/:id/scoring">
            <ScoringTable data={data} setData={setData} columns={columns} />
          </Route>
          <Route exact path="/competitions/:id/results">
            <ResultsTable data={data} columns={columns} />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
