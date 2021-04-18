import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Box, Tabs, Tab, Typography, Paper } from "@material-ui/core";
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

const useStyles = makeStyles({
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
    fontFamily:"'Lato', sans-serif",
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

  indicator: {
    left: "0px",
  },
  flexContainerVertical: {
    marginTop: "2em",
  },
});

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
              icon={<img src="/buttons/competitions.svg" alt="competitions" />}
              label="Competitions"
              component={Link}
              to="/competitions"
              classes={{
                wrapper: classes.wrapper,
              }}
            />
            <Tab
              value={"participants"}
              icon={<img src="/buttons/participants.svg" alt="participants" />}
              label="Participants"
              component={Link}
              to="/participants"
              classes={{
                wrapper: classes.wrapper,
              }}
            />
            <Tab
              value={"judges"}
              icon={<img src="/buttons/judges.svg" alt="judges" />}
              label="Judges"
              component={Link}
              to="/judges"
              classes={{
                wrapper: classes.wrapper,
              }}
            />
          </Tabs>
          <Tab
              value={"judges"}
              icon={<img src="/buttons/judges.svg" alt="judges" />}
              label="Judges"
              component={Link}
              to="/judges"
              classes={{
                wrapper: classes.wrapper,
              }}
            />
        </AppBar>
      </Box>
    </div>
  );
};
export default Dashboard;
