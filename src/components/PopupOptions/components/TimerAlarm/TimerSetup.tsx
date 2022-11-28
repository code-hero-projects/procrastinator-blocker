import * as React from 'react';
import { Box, createStyles, TextField, Typography, withStyles, WithStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    separator: {
      marginLeft: '5px',
      marginRight: '5px'
    }
  });

interface TimerSetupProps {
  hours: number;
  minutes: number;
  onUpdateHours: (hours: number) => void;
  onUpdateMinutes: (minutes: number) => void;
}

type TimerSetupPropsStyles = TimerSetupProps & WithStyles<typeof styles>;

function TimerSetupComponent({ classes, hours, minutes, onUpdateHours, onUpdateMinutes }: TimerSetupPropsStyles) {
  const inputHours = hours == 0 ? '' : hours;
  const inputMinutes = hours == 0 ? '' : minutes;

  const onChangeHours = (event: React.ChangeEvent<HTMLInputElement>) => onUpdateHours(+event.target.value);

  const onChangeMinutes = (event: React.ChangeEvent<HTMLInputElement>) => onUpdateMinutes(+event.target.value);

  return (
    <Box display='flex'>
      <TextField label='Hours' variant='outlined' size='small' value={inputHours} onChange={onChangeHours}></TextField>
      <Typography variant='h6' className={classes.separator}>:</Typography>
      <TextField label='Minutes' variant='outlined' size='small' value={inputMinutes} onChange={onChangeMinutes}></TextField>
    </Box>
  );
}

export const TimerSetup = withStyles(styles)(TimerSetupComponent);