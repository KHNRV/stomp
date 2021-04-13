import React from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
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
  appBar: {
    maxWidth: "1500px",
  },
}));

const TableStepper = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" justifyContent="center">
      <AppBar className={classes.appBar} position="sticky" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="fullWidth"
          aria-label="simple tabs example"
        >
          <Tab
            icon={
              <img
                height="50px"
                src="/buttons/competition.svg"
                alt="competition"
              />
            }
            label="Competition"
            component={Link}
            to="/competitions/:id"
          />
          <Tab
            icon={<img src="/buttons/scoring.svg" alt="scoring" />}
            label="Scoring"
            component={Link}
            to="/competitions/:id/scoring"
          />
          <Tab
            icon={<img src="/buttons/results.svg" alt="results" />}
            label="Results"
            href="#basic-tabs"
            component={Link}
            to="/competitions/:id/results"
          />
        </Tabs>
      </AppBar>
    </Box>
  );
};

export default TableStepper;
