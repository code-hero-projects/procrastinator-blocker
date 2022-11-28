import * as React from 'react';
import { createStyles, Typography, withStyles, WithStyles } from '@material-ui/core';

const styles = () =>
  createStyles({});

interface AlarmProps {
  start: Date;
}

type AlarmPropsStyles = AlarmProps & WithStyles<typeof styles>;

function AlarmComponent({ classes, start }: AlarmPropsStyles) {
  return <Typography variant='h6'>Timer</Typography>;
}

export const Alarm = withStyles(styles)(AlarmComponent);
