import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { logDOM } from "@testing-library/dom";

export default function DashboardParticipantsNew({
  open,
  setOpen,
  setPartData,
  action,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({});

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (formData.first_name && formData.last_name) {
      action.create
        .participant(formData)
        .then(setFormData({}))
        .then(() => setOpen(false));
    }
  };

  const handleFormData = (prev, event) => {
    const update = { ...prev };
    update[event.target.name] = event.target.value;
    console.log(update);
    return update;
  };

  return (
    <div>
      <form>
        <Dialog fullScreen={fullScreen} open={open} onClose={handleCancel}>
          <DialogTitle id="responsive-dialog-title">
            {"Create a Participant"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please provide details of the Participant..
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="first_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event) =>
                    setFormData((prev) => handleFormData(prev, event))
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="lname"
                  onChange={(event) =>
                    setFormData((prev) => handleFormData(prev, event))
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="bib"
                  label="Bib #"
                  name="bib"
                  autoComplete="bib"
                  onChange={(event) =>
                    setFormData((prev) => handleFormData(prev, event))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) =>
                    setFormData((prev) => handleFormData(prev, event))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="tel"
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                  onChange={(event) =>
                    setFormData((prev) => handleFormData(prev, event))
                  }
                />
              </Grid>
            </Grid>
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
      </form>
    </div>
  );
}
