import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
    margin: 10,
  },
}));

export default function SelectParticipants({ partData }) {
  const classes = useStyles();

  const participants = [];
  partData.forEach((participant) => {
    participants.push(participant.first_name);
  });

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="participants"
        options={participants}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select Participants"
            placeholder="Participants"
          />
        )}
      />
    </div>
  );
}
