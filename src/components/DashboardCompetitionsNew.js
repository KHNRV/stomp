import React from "react";
import {
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Dialog,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  useMediaQuery,
} from "@material-ui/core/";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import { useTheme } from "@material-ui/core/styles";

export default function DashboardCompetitionsNew() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        endIcon={<EmojiFlagsIcon />}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Create a Competition
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Create a Competition"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide details of the Competition..
          </DialogContentText>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">
                  Scoring System
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // onChange={handleChange}
                >
                  <MenuItem value={"Callback"}>Callback</MenuItem>
                  <MenuItem value={"Ralative Placement"}>Relative Placement</MenuItem>
                </Select>
              </Grid>

            </Grid>
          </form>
        </DialogContent>

        {/* DBLOGIC */}

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
