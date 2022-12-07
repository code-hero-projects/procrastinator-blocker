import * as React from 'react';
import { Box, createStyles, withStyles, WithStyles } from '@material-ui/core';
import { OpenConfiguration, ProcrastinateToggleContainer, TimerAlarmContainer } from './components';
import { BrowserManager } from 'browserManager';
import { ProcrastinateMessages, ProcrastinateMessageTypes } from 'messages';
import { useEffect } from 'react';

const styles = () =>
  createStyles({
    box: {
      minWidth: '200px',
      padding: '10px'
    }
  });

type PopupOptionsStyles = WithStyles<typeof styles>;

function PopupOptionsComponent({ classes }: PopupOptionsStyles) {
  const [loading, setLoading] = React.useState(true);
  const [procrastinate, setProcrastinate] = React.useState(true);

  useEffect(() => {
    BrowserManager.sendMessageToPopUp({ type: ProcrastinateMessages.READ_REQUEST_POPUP });

    BrowserManager.addMessageEventListener((message: ProcrastinateMessageTypes) => {
      switch (message.type) {
        case ProcrastinateMessages.READ_RESPONSE_POPUP:
          setProcrastinate(message.payload);
          setLoading(false);
          break;
        case ProcrastinateMessages.SET_RESPONSE:
          setProcrastinate(message.payload);
          break;
        default:
          break;
      }
    });
  }, []);
  
  if (loading) {
    return <></>;
  }

  const onProcrastinateChange = () => setProcrastinate(!procrastinate)

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
