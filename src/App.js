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
import dataInterfaces from "./helpers/dataInterfaces";

// Feed in the the whole data and competition id
let [compData, compCol] = getData(impData, 0);

function App() {
  const action = useApplicationData();

  const [partData, setPartData] = useState(impData.participants);
  const [judgeData, setJudgeData] = useState(impData.judges);
  const [comp, setComp] = useState(compData);
  const columns = compCol;
  // const [columns, setColumns] = useState(compCol);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="main-components">
          <Router>
            <Nav></Nav>
            <Switch>
              <Route exact path="/competitions">
                <Dashboard />
                <DashboardCompetitions
                  eventName={action.read.state.event_name}
                  compData={action.read.competitions.for.competitionsTable()}
                />
              </Route>
              <Route exact path="/participants">
                <Dashboard />
                <DashboardParticipants
                  eventName={action.read.state.event_name}
                  partData={action.read.participants()}
                  setPartData={setPartData}
                  action={action}
                />
              </Route>
              <Route exact path="/judges">
                <Dashboard />
                <DashboardJudges
                  eventName={action.read.state.event_name}
                  judgeData={action.read.judges()}
                  setJudgeData={setJudgeData}
                />
              </Route>
              <Route exact path="/competitions/:id/">
                <TableStepper />
                {!action.read.state.competitions.length ? null : (
                  <TableCompetition
                    partData={action.read.state.participants}
                    setPartData={setPartData}
                    judgeData={action.read.state.judges}
                    compData={(competition_id) =>
                      action.read.competitions.for.registerForm(competition_id)
                    }
                    setJudgeData={setJudgeData}
                  />
                )}
              </Route>
              {/* DBLOGIC */}
              <Route path="/competitions/:id/scoring">
                <TableStepper />
                {!action.read.state.competitions.length ? null : (
                  <TableScoring
                    data={(competition_id) =>
                      action.read.competitions.for.scoresTable(competition_id)
                    }
                    setData={setComp}
                  />
                )}
              </Route>
              <Route path="/competitions/:id/results">
                <TableStepper />
                <TableResults
                  data={comp}
                  columns={columns}
                  eventName={action.read.state.event_name}
                />
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
