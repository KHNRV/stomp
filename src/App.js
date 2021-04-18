import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import DashboardCompetitions from "./components/DashboardCompetitions";
import DashboardParticipants from "./components/DashboardParticipants";
import DashboardJudges from "./components/DashboardJudges";
import TableCompetition from "./components/TableCompetition";
import TableScoring from "./components/TableScoring";
import TableResults from "./components/TableResults";
import TableStepper from "./components/TableStepper";

import { impData } from "./helpers/testdata";
import getData from "./helpers/getData";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./styles/app.scss";
import useApplicationData from "./hooks/useApplicationData";

// Feed in the the whole data and competition id
let [compData, compCol] = getData(impData, 0);

function App() {
  const action = useApplicationData();

  const [comp, setComp] = useState(compData);
  const columns = compCol;

  return (
    <>
      <div className="App">
        <ThemeProvider theme={theme}>
          <div className="main-components">
            <Router>
              <Nav action={action} />
              <Switch>
                <Route exact path="/competitions">
                  {!action.read.state.competitions.length ? null : (
                    <DashboardCompetitions action={action} />
                  )}
                </Route>
                <Route exact path="/participants">
                  <DashboardParticipants action={action} />
                </Route>
                <Route exact path="/judges">
                  <DashboardJudges action={action} />
                </Route>
                <Route exact path="/competitions/:id/">
                  <TableStepper />
                  {!action.read.state.competitions.length ? null : (
                    <TableCompetition action={action} />
                  )}
                </Route>
                <Route path="/competitions/:id/scoring">
                  <TableStepper />
                  {!action.read.state.competitions.length ? null : (
                    <TableScoring action={action} />
                  )}
                </Route>
                <Route path="/competitions/:id/results">
                  <TableStepper />
                  {!action.read.state.competitions.length ? null : (
                    <TableResults
                      data={comp}
                      columns={columns}
                      action={action}
                    />
                  )}
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route path="/">
                  <h1>My Events</h1>
                  <p>Here comes Dashboard with stats</p>
                  <ul>
                    <li>No of participants</li>
                    <li>No of competitons</li>
                    <li>No of etc..</li>
                  </ul>
                  <img src="/logo.png" alt="" className="logo" />
                  <div className="wave">
                    <img src="/docs/wave.svg" alt="" />
                  </div>
                </Route>
              </Switch>
            </Router>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
