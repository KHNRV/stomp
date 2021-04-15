import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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
  const location = useLocation().pathname.split("/").slice(-1)[0];
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState(
    isNaN(parseInt(location)) ? location : "competition"
  );
  const { id } = useParams();

  const handleChange = (event, newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <Box display="flex" justifyContent="center">
      <AppBar className={classes.appBar} position="sticky" color="default">
        <Tabs
          value={activeTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab
            value={"competition"}
            icon={<img src="/buttons/competition.svg" alt="competition" />}
            label="Competition"
            component={Link}
            to={`/competitions/${id}`}
          />
          <Tab
            value={"scoring"}
            icon={<img src="/buttons/scoring.svg" alt="scoring" />}
            label="Scoring"
            component={Link}
            to={`/competitions/${id}/scoring`}
          />
          <Tab
            value={"results"}
            icon={<img src="/buttons/results.svg" alt="results" />}
            label="Results"
            href="#basic-tabs"
            component={Link}
            to={`/competitions/${id}/results`}
          />
        </Tabs>
      </AppBar>
    </Box>
  );
};

export default TableStepper;
