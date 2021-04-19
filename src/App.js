import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Status from "./components/Status";
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
  /* Here comes in the isLoggedIn Logic */
  const action = useApplicationData();

  const isLoggedIn = action.authenticate.isLoggedIn();
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

                  {!isLoggedIn ? null : (
                    <DashboardCompetitions action={action} />
                  )}
                </Route>
                <Route exact path="/participants">
                  <Nav action={action} />
                  {!isLoggedIn ? null : (
                    <DashboardParticipants action={action} />
                    )}
                </Route>
                <Route exact path="/judges">
                  <Nav action={action} />
                  {!isLoggedIn ? null : (
                    <DashboardJudges action={action} />
                    )}
                </Route>
                <Route exact path="/competitions/:id">
                  <Nav action={action} />

                  <TableStepper />
                  {!isLoggedIn ? null : (
                    <TableCompetition action={action} />
                  )}
                </Route>
                <Route exact path="/competitions/:id/scoring">
                  <Nav action={action} />

                  <TableStepper />
                  {!isLoggedIn ? null : (
                    <TableScoring action={action} />
                  )}
                </Route>
                <Route exact path="/competitions/:id/results">
                  <Nav action={action} />

                  <TableStepper />
                  {!isLoggedIn ? null : (
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
                  {isLoggedIn ? (
                    <Redirect to="/competitions" />
                  ) : (
                    <Status isLoggedIn={isLoggedIn} />
                  )}
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
