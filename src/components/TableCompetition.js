import SelectParticipants from "./SelectParticipants";
import SelectJudges from "./SelectJudges";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import { Paper, Typography, Box, Button, Grid } from "@material-ui/core";

const TableCompetition = ({
  partData,
  setPartData,
  judgeData,
  setJudgeData,
}) => {
  // DBLOGIC
  return (
    <ThemeProvider theme={theme}>
      <div className="competition-table">
        <Paper
          style={{ backgroundColor: "#F7F7F7", padding: 20 }}
          elevation={2}
        >
          <form method="POST">
            <Box minHeight="20vh">
              <Box>
                <Typography
                  style={{ textAlign: "left", padding: 15 }}
                  variant="h6"
                >
                  {/* DB LOGIC */}
                  Who is in the Competition?
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
                  <SelectParticipants partData={partData} />
                  <SelectJudges judgeData={judgeData} />
                </Grid>
                <Button
                  style={{ marginTop: 20 }}
                  color="primary"
                  type="submit"
                  // Apply below for the COMPETITION OBJECT
                  // Here setPartData needs to be invoked for form submission
                  // Here setJudgeData needs to be invoked for form submission
                >
                  Save
                </Button>
              </Grid>
            </Box>
          </form>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default TableCompetition;
