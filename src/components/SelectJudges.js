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

export default function SelectJudges({ action, form }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="judges"
        options={action.read.judges.all()}
        defaultValue={action.read.judges.where.ids(form.state.judges)}
        getOptionLabel={(option) => `${option.first_name} ${option.last_name}`}
        autoComplete={true}
        autoHighlight={true}
        filterSelectedOptions={true}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select Judges"
            placeholder="Judges"
          />
        )}
        onChange={(event, value) =>
          form.handleChange(
            "judges",
            value.map((judge) => judge.id)
          )
        }
      />
    </div>
  );
}
