import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  box: {
    padding: 20,
  }
}));

export default function GameIdea(props) {
  const classes = useStyles();

  return (
    <Paper>
      <Box className={classes.box}>
        <Typography>
          Hello 
        </Typography>
      </Box>
    </Paper>
  );
}
