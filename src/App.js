import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import TableCompetition from "./components/TableCompetition";
import TableScoring from "./components/TableScoring";
import TableResults from "./components/TableResults";
import TableStepper from "./components/TableStepper";

import { impData } from "./helpers/testdata";
import getData from "./helpers/getData";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./styles/app.scss";

// Feed in the the whole data and competition id
let [compData, compCol] = getData(impData, 1);

function App() {
  const [partData, setPartData] = useState(impData.participants);
  const [judgeData, setJudgeData] = useState(impData.judges);
  const [data, setData] = useState(compData);
  const [columns, setColumns] = useState(compCol);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="main-components">
          <Router>
            <Nav></Nav>
            <Switch>
              <Route exact path="/competitions/:id/">
                <TableStepper />
                <TableCompetition
                  partData={partData}
                  setPartData={setPartData}
                  judgeData={judgeData}
                  setJudgeData={setJudgeData}
                />
              </Route>
              {/* DBLOGIC */}
              <Route path="/competitions/:id/scoring">
                <TableStepper />
                <TableScoring data={data} setData={setData} columns={columns} />
              </Route>
              <Route path="/competitions/:id/results">
                <TableStepper />
                <TableResults data={data} columns={columns} />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
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
