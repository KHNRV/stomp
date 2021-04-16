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

export default function SelectParticipants({ action, form }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="participants"
        options={action.read.participants.all()}
        defaultValue={action.read.participants.where.ids(
          form.state.participants
        )}
        getOptionLabel={(option) =>
          `${option.bib} - ${option.first_name} ${option.last_name}`
        }
        autoComplete={true}
        autoHighlight={true}
        filterSelectedOptions={true}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select Participants"
            placeholder="Participants"
          />
        )}
        onChange={(event, value) =>
          form.handleChange(
            "participants",
            value.map((participant) => participant.id)
          )
        }
      />
    </div>
  );
}
