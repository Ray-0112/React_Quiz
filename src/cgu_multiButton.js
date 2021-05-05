import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(10),
      width: '100ch'
    },
  },
}));
export default function DisableElevation() {
  return (
    <Button variant="contained" color="primary" disableElevation>
      Login
    </Button>
  );
}