import * as React from 'react';
import { createStyles, Typography, withStyles, WithStyles } from '@material-ui/core';
import { Timer } from 'entities';
import { useState } from 'react';

const styles = () =>
  createStyles({
    timer: {
      width: '100%'
    }
  });

interface AlarmProps {
  timer: Timer;
  onTimerFinish: () => void;
}

type AlarmPropsStyles = AlarmProps & WithStyles<typeof styles>;

function AlarmComponent({ classes, timer, onTimerFinish }: AlarmPropsStyles) {
  const timeDifference = timer.endDate! - Date.now();

  const [timeoutTimer, setTimeoutTimer] = useState<number>(0);
  const [clockTimer, setClockTimer] = useState<Date>(new Date(timeDifference));

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (clockTimer.getTime() < 2000) {
        console.log('timer finished');
        onTimerFinish();
        return;
      }
      const newTimer = clockTimer;
      newTimer.setUTCSeconds(newTimer.getUTCSeconds() - 1);
      setClockTimer(newTimer);
      setTimeoutTimer(timeoutTimer + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeoutTimer]);

  return (
    <Typography 
      variant='h6'
      className={classes.timer}>
        {clockTimer.getUTCHours()}h : {clockTimer.getUTCMinutes()}m : {clockTimer.getUTCSeconds()}
    </Typography>
  );
}

export const Alarm = withStyles(styles)(AlarmComponent);
