import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import DashboardCompetitions from "./components/DashboardCompetitions";
import DashboardParticipants from "./components/DashboardParticipants";
import DashboardJudges from "./components/DashboardJudges";
import TableCompetition from "./components/TableCompetition";
import TableScoring from "./components/TableScoring";
import TableResults from "./components/TableResults";
import TableStepper from "./components/TableStepper";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./styles/app.scss";
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const action = useApplicationData();
  return (
    <>
      <div className="App">
        <ThemeProvider theme={theme}>
          <div className="main-components">
            <Router>
              {/* <Nav action={action} /> */}
              <Switch>
                <Route exact path="/competitions">
                  <Nav action={action} />

                  {!action.read.state.competitions.length ? null : (
                    <DashboardCompetitions action={action} />
                  )}
                </Route>
                <Route exact path="/participants">
                  <Nav action={action} />

                  <DashboardParticipants action={action} />
                </Route>
                <Route exact path="/judges">
                  <Nav action={action} />

                  <DashboardJudges action={action} />
                </Route>
                <Route exact path="/competitions/:id/">
                  <Nav action={action} />

                  <TableStepper />
                  {!action.read.state.competitions.length ? null : (
                    <TableCompetition action={action} />
                  )}
                </Route>
                <Route exact path="/competitions/:id/scoring">
                  <Nav action={action} />

                  <TableStepper />
                  {!action.read.state.competitions.length ? null : (
                    <TableScoring action={action} />
                  )}
                </Route>
                <Route exact path="/competitions/:id/results">
                  <Nav action={action} />

                  <TableStepper />
                  {!action.read.state.competitions.length ? null : (
                    <TableResults action={action} />
                  )}
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route path="/">
                {/* Here comes in the isLoggedIn Logic */}
                {true ? <Redirect to="/competitions" /> : <Redirect to="/login" />} 
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
