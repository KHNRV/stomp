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

export default function SelectJudges({ judgeData, compData }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="judges"
        options={judgeData}
        getOptionLabel={(option) => `${option.first_name} ${option.last_name}`}
        defaultValue={judgeData.filter((judge)=> compData.judge_ids.includes(judge.id))}
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
      />
    </div>
  );
}
