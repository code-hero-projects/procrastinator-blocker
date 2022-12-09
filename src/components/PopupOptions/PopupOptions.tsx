import * as React from 'react';
import { Box, createStyles, withStyles, WithStyles } from '@material-ui/core';
import { OpenConfiguration, ProcrastinateToggleContainer, TimerAlarmContainer } from './components';

const styles = () =>
  createStyles({
    box: {
      minWidth: '200px',
      padding: '10px'
    }
  });

export interface PopupOptionsProps {
  procrastinate: boolean;
}

type PopupOptionsStyles = PopupOptionsProps & WithStyles<typeof styles>;

function PopupOptionsComponent({ classes, procrastinate }: PopupOptionsStyles) {
  return (
    <>
      {!procrastinate && <Box className={classes.box}>
        <TimerAlarmContainer />
      </Box>}
      {procrastinate && <Box className={classes.box}>
        <ProcrastinateToggleContainer />
      </Box>}
      <Box className={classes.box}>
        <OpenConfiguration />
      </Box>
    </>
  );
};

export const PopupOptions = withStyles(styles)(PopupOptionsComponent);
