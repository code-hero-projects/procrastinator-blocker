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
  procrastinate: boolean;
  onProcrastinateClick: () => void;
}

type ProcrastinateTogglePropsStyles = ProcrastinateProps & WithStyles<typeof styles>;

function ProcrastinateToggleComponent({ classes, procrastinate, onProcrastinateClick }: ProcrastinateTogglePropsStyles) {
  const buttonColor = procrastinate ? 'primary' : 'secondary';
  const buttonText = procrastinate ? 'START' : 'STOP';

  return (
    <Button className={classes.button} variant='contained' color={buttonColor} onClick={onProcrastinateClick}>
      {buttonText}
    </Button>
  );
};

export const ProcrastinateToggle = withStyles(styles)(ProcrastinateToggleComponent);
