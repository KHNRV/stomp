import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ScoringTable from "./components/ScoringTable";
import ResultsTable from "./components/ResultsTable";

import "./styles/app.scss";



const db = [
  {
    bib: 101,
    first_name: "Dora",
    last_name: "Dewing",
    judge1: 2,
    judge2: 2,
    judge3: 1,
    judge4: 2,
    judge5: 0,
  },
  {
    bib: 102,
    first_name: "Sophie",
    last_name: "Minocchi",
    judge1: 0,
    judge2: 0,
    judge3: 1,
    judge4: 0,
    judge5: 2,
  },
  {
    bib: 103,
    first_name: "Willette",
    last_name: "Romagosa",
    judge1: 2,
    judge2: 0,
    judge3: 0,
    judge4: 2,
    judge5: 2,
  },
  {
    bib: 104,
    first_name: "Camey",
    last_name: "Darree",
    judge1: 0,
    judge2: 0,
    judge3: 1,
    judge4: 2,
    judge5: 2,
  },
  {
    bib: 105,
    first_name: "Dennet",
    last_name: "Reidshaw",
    judge1: 2,
    judge2: 2,
    judge3: 1,
    judge4: 1,
    judge5: 2,
  },
];

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

  const [data, setData] = useState(db);

  return (
    <div className="App">
      <h1>Stomp</h1>

      <Router>
        <div>
          <nav position="static">
            {" "}
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/scoring">Scoring Table</Link>
              </li>
              <li>
                <Link to="/results">Results Table</Link>
              </li>
            </ul>
          </nav>{" "}
          <hr />
          <Switch>
            <Route path="/scoring">
              <ScoringTable columns={columns} data={data} setData={setData} />
            </Route>
            <Route path="/results">
              <ResultsTable columns={columns} data={data} setData={setData} />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
