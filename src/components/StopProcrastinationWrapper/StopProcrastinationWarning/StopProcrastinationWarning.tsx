import { createStyles, Typography, withStyles, WithStyles } from '@material-ui/core';
import { Center } from 'components/Center';
import * as React from 'react';

const styles = () =>
  createStyles({
    root: {
      backgroundColor: 'black',
      width: '100%',
      height: '100vh',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0
    },
    text: {
      color: 'white'
    }
  });

type StopProcrastinationWarningStyles = WithStyles<typeof styles>;

function StopProcrastinationWarningComponent({ classes }: StopProcrastinationWarningStyles) {
  return (
    <Center className={classes.root}>
      <Typography variant='h1' className={classes.text}>STOP PROCRASTINATING</Typography>
    </Center>
  );
}

export const StopProcrastinationWarning = withStyles(styles)(StopProcrastinationWarningComponent);
