import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
        height: '10ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
    return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Email Address" />
      <br></br>
      <TextField id="standard-basic" label="Password" />
    </form>
  );
}