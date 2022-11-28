import * as React from 'react';
import { Box, createStyles, withStyles, WithStyles } from '@material-ui/core';
import { OpenConfiguration, ProcrastinateToggleContainer, TimerAlarmContainer } from './components';
import { BrowserManager } from 'browserManager';
import { ProcrastinateMessages } from 'messages';

const styles = () =>
  createStyles({
    box: {
      minWidth: '200px',
      padding: '10px'
    }
  });

type PopupOptionsStyles = WithStyles<typeof styles>;

function PopupOptionsComponent({ classes }: PopupOptionsStyles) {
  BrowserManager.sendMessageToPopUp({ type: ProcrastinateMessages.READ_REQUEST_POPUP });
  
  return (
    <>
      <Box className={classes.box}>
        <TimerAlarmContainer />
      </Box>
      <Box className={classes.box}>
        <ProcrastinateToggleContainer />
      </Box>
      <Box className={classes.box}>
        <OpenConfiguration />
      </Box>
    </>
  );
};

export const PopupOptions = withStyles(styles)(PopupOptionsComponent);
