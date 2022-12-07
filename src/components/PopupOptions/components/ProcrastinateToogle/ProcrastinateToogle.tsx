import * as React from 'react';
import { Button, createStyles, withStyles, WithStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    button: {
      border: 0,
      padding: '5px 10px',
      width: '100%',
      cursor: 'pointer'
    },
  });

interface ProcrastinateProps {
  onProcrastinateClick: () => void;
}

type ProcrastinateTogglePropsStyles = ProcrastinateProps & WithStyles<typeof styles>;

function ProcrastinateToggleComponent({ classes, onProcrastinateClick }: ProcrastinateTogglePropsStyles) {
  return (
    <Button className={classes.button} variant='contained' color='primary' onClick={onProcrastinateClick}>
      START
    </Button>
  );
};

export const ProcrastinateToggle = withStyles(styles)(ProcrastinateToggleComponent);
