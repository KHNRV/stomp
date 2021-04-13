import SelectParticipants from "./SelectParticipants";
import SelectJudges from "./SelectJudges";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import { Paper, Typography, Box, Button, Grid } from "@material-ui/core";

const TableCompetition = ({ data, setData, columns, setColumns }) => {
  // DBLOGIC
  return (
    <ThemeProvider theme={theme}>
      <div className="competition-table">
        <Paper style={{ padding: 8 }} elevation={2}>
          <form noValidate>
            <Box minHeight="20vh">
              <Box>
                <Typography
                  style={{ textAlign: "left", padding: 15 }}
                  variant="h6"
                >
                  {/* DB LOGIC */}
                  Who is in the {`${"Solo Jazz Newcomer"}`} Competition?
                </Typography>
              </Box>
              <Grid
                container
                spacing={0}
                direction="row"
                alignItems="center"
                alignContent="space-between"
                justify="center"
                style={{ minHeight: "15vh", padding: 20 }}
              >
                <Grid container direction="row" justify="space-between">
                  <SelectParticipants
                    data={data}
                    setData={setData}
                    columns={columns}
                    setColumns={setColumns}
                  />
                  <SelectJudges
                    data={data}
                    setData={setData}
                    columns={columns}
                    setColumns={setColumns}
                  />
                </Grid>
                <Button
                  style={{ marginTop: 20 }}
                  variant="outlined"
                  color="primary"
                  type="submit"
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
