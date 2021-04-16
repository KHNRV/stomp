import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="main-components">
          <Router>
            <Nav></Nav>
            <Switch>
              <Route exact path="/competitions">
                <Dashboard />
                <DashboardCompetitions action={action} />
              </Route>
              <Route exact path="/participants">
                <Dashboard />
                <DashboardParticipants action={action} />
              </Route>
              <Route exact path="/judges">
                <Dashboard />
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
                <TableResults data={comp} columns={columns} action={action} />
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
