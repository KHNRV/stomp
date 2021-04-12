import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import CompetitionTable from "./components/CompetitionTable";
import ScoringTable from "./components/ScoringTable";
import ResultsTable from "./components/ResultsTable";
import Stepper from "./components/Stepper";

import { compData, compCol } from "./data";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./styles/app.scss";

function App() {
  const [data, setData] = useState(compData);
  const [columns, setColumns] = useState(compCol);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Nav></Nav>
        <div className="main-components">
          <Router>
            <Switch>
              <Route exact path="/competitions/:id/">
                <CompetitionTable
                  data={data}
                  setData={setData}
                  columns={columns}
                  setColumns={setColumns}
                />
                <Stepper />
              </Route>
              <Route exact path="/competitions/:id/scoring">
                <ScoringTable data={data} setData={setData} columns={columns} />
                <Stepper />
              </Route>
              <Route exact path="/competitions/:id/results">
                <ResultsTable data={data} columns={columns} />
                <Stepper />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
