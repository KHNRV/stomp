import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";

import {
  Grid,
  TextField,
  InputLabel,
  Dialog,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  useMediaQuery,
} from "@material-ui/core/";
import { useTheme } from "@material-ui/core/styles";

export default function DashboardCompetitionsNew({ open, setOpen, action }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({});

  const handleCancel = () => {
    setFormData({})
    setOpen(false);
  };

  const handleSave = () => {
    if (formData.name && formData.scoring_system_id) {
      action.create
        .competition(formData)
        .then(setFormData({}))
        .then(() => setOpen(false));
    }
  };

  const handleFormData = (prev, value, key) => {
    const update = { ...prev };
    update[key] = value;
    console.log(value);
    return update;
  };

  return (
    <div>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleCancel}>
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
                  onChange={(event) =>
                    setFormData((prev) => handleFormData(prev, event.target.value, "name"))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">
                  Scoring System
                </InputLabel>
                <Autocomplete
                  id="scoring_system"
                  options={action.read.scoring.list()}
                  getOptionLabel={(option) => option.name}
                  // defaultValue={action.read.scoring.list()[0]}
                  autoComplete={true}
                  autoHighlight={true}
                  filterSelectedOptions={true}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                  onChange={(event, value) =>
                    setFormData((prev) => handleFormData(prev, value && value.id, "scoring_system_id"))
                  }
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>

        {/* DBLOGIC */}

        <DialogActions>
          <Button autoFocus onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleSave()} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
