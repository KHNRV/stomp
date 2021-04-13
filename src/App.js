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
        <div className="main-components">
          <Router>
            <Nav></Nav>
            <Switch>
              <Route exact path="/competitions/:id/">
                <TableStepper />
                <TableCompetition
                  data={data}
                  setData={setData}
                  columns={columns}
                  setColumns={setColumns}
                />
              </Route>
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
