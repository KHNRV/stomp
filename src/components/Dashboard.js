import React from "react";
import DashboardCompetitions from "./DashboardCompetitions";
import DashboardJudges from "./DashboardJudges";
import DashboardParticipants from "./DashboardParticipants";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
  title: {
    flexGrow: 1,
  },
  appBar: {
    maxWidth: "1500px",
    position: "-webkit-sticky",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="center">
        <AppBar className={classes.appBar} position="sticky" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="simple tabs example"
          >
            <Tab
              icon={<img src="/buttons/competitions.svg" alt="competitions" />}
              label="Competitions"
            />
            <Tab
              icon={<img src="/buttons/participants.svg" alt="participants" />}
              label="Participants"
            />
            <Tab
              icon={<img src="/buttons/judges.svg" alt="judges" />}
              label="Judges"
            />
          </Tabs>
        </AppBar>
      </Box>

      <TabPanel value={value} index={0}>
        <DashboardCompetitions />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DashboardParticipants />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DashboardJudges />
      </TabPanel>
    </div>
  );
};
export default Dashboard;
