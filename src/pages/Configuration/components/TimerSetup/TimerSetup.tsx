import { Box, Button, createStyles, TextField, Typography, withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';

const styles = () => createStyles({
  separator: {
    marginLeft: '5px',
    marginRight: '5px'
  },
  inputs: {
    marginTop: '1%'
  },
  save: {
    marginLeft: '1%'
  }
});

interface TimerSetupProps {
  hours: number;
  minutes: number;
  onUpdateHours: (hours: number) => void;
  onUpdateMinutes: (minutes: number) => void;
  onSaveClick: () => void;
}

type TimerSetupPropsStyles = TimerSetupProps & WithStyles<typeof styles>;

function TimerSetupComponent({ classes, hours, minutes, onUpdateHours, onUpdateMinutes, onSaveClick }: TimerSetupPropsStyles) {
  const inputHours = hours == 0 ? '' : hours;
  const inputMinutes = minutes == 0 ? '' : minutes;

  const onChangeHours = (event: React.ChangeEvent<HTMLInputElement>) => onUpdateHours(+event.target.value);
  const onChangeMinutes = (event: React.ChangeEvent<HTMLInputElement>) => onUpdateMinutes(+event.target.value);

  return (
    <>
      <Typography variant='h6'>Time the extension is active:</Typography>
      <Box display='flex' className={classes.inputs}>
        <TextField label='Hours' variant='outlined' size='small' value={inputHours} onChange={onChangeHours}></TextField>
        <Typography variant='h6' className={classes.separator}>:</Typography>
        <TextField label='Minutes' variant='outlined' size='small' value={inputMinutes} onChange={onChangeMinutes}></TextField>
        <Button variant='contained' color='primary' onClick={onSaveClick} className={classes.save}>Save</Button>
      </Box>
    </>
  );
}

export const TimerSetup = withStyles(styles)(TimerSetupComponent);
