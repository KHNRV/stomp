import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Divider,
  Tabs,
  Tab,
  Typography,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    alignItems: "center",
  },
  event: {
    backgroundColor: "rgba(12, 12, 12, 1)",
    padding: "0.5em 2em 0.5em 2em",
    height: "4.6em",
    borderRadius: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#F7F7F7",
  },
  event_name: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 25,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    height: "100vh",
    maxWidth: "100vw",
    width: "auto",
    position: "-webkit-sticky",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "10em",
  },

  indicator: {
    left: "0px",
  },
  flexContainerVertical: {
    marginTop: "none",
  },
}));

const Dashboard = ({ action }) => {
  const classes = useStyles();
  const location = useLocation().pathname.slice(1);
  const [activeTab, setActiveTab] = useState(location);

  const handleChange = (event, newActiveTab) => {
    setActiveTab(newActiveTab);
  };
  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="center">
        <AppBar className={classes.appBar} position="sticky" color="default">
          <Paper className={classes.event}>
            <Typography noWrap className={classes.event_name}>
              {action.read.state.event_name}
            </Typography>
          </Paper>
          <Tabs
            orientation="vertical"
            value={activeTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            classes={{
              indicator: classes.indicator,
              flexContainerVertical: classes.flexContainerVertical,
            }}
          >
            <Tab
              value={"competitions"}
              icon={
                <img
                  height="30px"
                  src="/buttons/competitions.svg"
                  alt="competitions"
                />
              }
              label="Competitions"
              component={Link}
              to={`${action.read.state.event_code}/competitions`}
              classes={{
                wrapper: classes.wrapper,
              }}
            />
            <Tab
              value={"participants"}
              icon={
                <img
                  height="30px"
                  src="/buttons/participants.svg"
                  alt="participants"
                />
              }
              label="Participants"
              component={Link}
              to={`${action.read.state.event_code}/participants`}
              classes={{
                wrapper: classes.wrapper,
              }}
            />
            <Tab
              value={"judges"}
              icon={
                <img height="30px" src="/buttons/judges.svg" alt="judges" />
              }
              label="Judges"
              component={Link}
              to={`${action.read.state.event_code}/judges`}
              classes={{
                wrapper: classes.wrapper,
              }}
            />
            <Divider />
            <Tab
              icon={
                <img height="30px" src="/buttons/logout.svg" alt="judges" />
              }
              label="Logout"
              component={Link}
              to="/login"
              classes={{
                wrapper: classes.wrapper,
              }}
            />
          </Tabs>
        </AppBar>
      </Box>
    </div>
  );
};
export default Dashboard;
