import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScoringTable from "./components/ScoringTable";
import ResultsTable from "./components/ResultsTable";
import Stepper from "./components/Stepper";

import stateData from "./data";

import "./styles/app.scss";

function App() {
  const scoring = { 0: "no", 1: "maybe", 2: "yes" };

  const columns = [
    {
      title: "Bib #",
      field: "bib",
      cellStyle: {
        backgroundColor: "#6B6A6A",
        color: "#fff",
      },
    },
    {
      title: "First Name",
      field: "first_name",
      cellStyle: {
        backgroundColor: "#C2C2C2",
        color: "black",
      },
    },
    {
      title: "Last Name",
      field: "last_name",
      cellStyle: {
        backgroundColor: "#C2C2C2",
        color: "black",
      },
    },
    { title: "Judge 1", field: "judge1", lookup: scoring },
    { title: "Judge 2", field: "judge2", lookup: scoring },
    { title: "Judge 3", field: "judge3", lookup: scoring },
    { title: "Judge 4", field: "judge4", lookup: scoring },
    { title: "Judge 5", field: "judge5", lookup: scoring },
  ];

  const [data, setData] = useState(stateData);

  return (
    <div className="App">
      <h1>Stomp</h1>

      <Router>
        <Switch>
          <Route path="/scoring">
            <ScoringTable columns={columns} data={data} setData={setData} />
          </Route>
          <Route path="/results">
            <ResultsTable columns={columns} data={data} setData={setData} />
          </Route>
          <Route path="/"></Route>
        </Switch>
        <Stepper />
      </Router>
    </div>
  );
}

export default App;
