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
  },
}));

export default function SelectJudges({ judgeData }) {
  const classes = useStyles();

  const judges = [];
  judgeData.forEach((judge) => {
    judges.push(judge.first_name);
  });

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="judges"
        options={judges}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select Judges"
            placeholder="Judges"
          />
        )}
      />
    </div>
  );
}
