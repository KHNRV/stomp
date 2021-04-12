import React from "react";
import Competitions from "./Competitions";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import GavelIcon from "@material-ui/icons/Gavel";
import PersonIcon from "@material-ui/icons/Person";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
// import { getDefaultNormalizer } from "@testing-library/dom";

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
  appBar: {
    maxWidth: "1500px",
    position: "-webkit-sticky",
    position: "sticky",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" justifyContent="center">
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="sticky" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="simple tabs example"
          >
            <Tab icon={<EmojiFlagsIcon />} label="Competitions" />
            <Tab icon={<PersonIcon />} label="Participants" />
            <Tab icon={<GavelIcon />} label="Judges" />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <Competitions />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
          Some Participants Here..
          <br />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Some Judges Here..
        </TabPanel>
      </div>
    </Box>
  );
};
export default Dashboard;
