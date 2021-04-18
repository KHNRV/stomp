import React, { useState } from "react";
import { SnackbarContainer } from "uno-material-ui";
import { snackbarService } from "uno-material-ui";

import { useParams } from "react-router";
import { Paper, Typography, Box, Button, Grid } from "@material-ui/core";
import SelectParticipants from "./SelectParticipants";
import SelectJudges from "./SelectJudges";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const TableCompetition = ({ action }) => {
  const showSuccessMessage = () => {
    snackbarService.showSnackbar(
      "Your changes have been successfully saved!",
      "info"
    );
  };
  const showErrorMessage = () => {
    snackbarService.showSnackbar("Save Unsuccessful!", "error");
  };

  let { id } = useParams();
  const [formData, setFormData] = useState(
    action.read.competitions.where.id(parseInt(id))
  );

  function handleChange(key, value) {
    setFormData((prev) => {
      const update = { ...prev };
      update[key] = value;
      return update;
    });
  }

  const handleSave = () => {
    action.update
      .competition()
      .from.registerForm(formData)
      .then(showSuccessMessage)
      .catch(showErrorMessage);
  };

  const scoringStyleName = `${
    action.read.scoring.list()[
      action.read.competitions.where.id(parseInt(id)).scoring_system_id - 1
    ].name
  } Scoring System`;

  return (
    <ThemeProvider theme={theme}>
      <div className="data-table">
        <Paper
          style={{ backgroundColor: "#F7F7F7", padding: 20 }}
          elevation={2}
        >
          <form>
            <Box minHeight="20vh">
              <Box>
                <Typography
                  style={{ textAlign: "left", padding: 15 }}
                  variant="h6"
                >
                  Who is in the
                  {action.read.competitions.where.id(parseInt(id)).name}?
                </Typography>
                <Typography
                  style={{ textAlign: "left", padding: "0px 0px 0px 15px" }}
                  variant="subtitle2"
                >
                  {scoringStyleName}
                </Typography>
              </Box>
              <Grid
                container
                spacing={0}
                alignContent="space-between"
                justify="center"
                style={{ minHeight: "15vh", padding: 20 }}
              >
                <Grid container direction="row" justify="center">
                  <SelectParticipants
                    action={action}
                    form={{ state: formData, handleChange }}
                  />
                  <SelectJudges
                    action={action}
                    form={{ state: formData, handleChange }}
                  />
                </Grid>
                <Button
                  onClick={() => handleSave()}
                  style={{ marginTop: 20 }}
                  color="primary"
                >
                  Save
                </Button>
              </Grid>
            </Box>
          </form>
        </Paper>
      </div>
      <SnackbarContainer />
    </ThemeProvider>
  );
};

export default TableCompetition;
