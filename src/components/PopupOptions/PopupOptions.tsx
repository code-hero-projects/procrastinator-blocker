import { Box, createStyles, withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';
import { OpenConfiguration, ProcrastinateToggleContainer } from './components';

const styles = () =>
  createStyles({
    box: {
      minWidth: '150px',
      padding: '10px'
    }
  });

type PopupOptionsStyles = WithStyles<typeof styles>;

function PopupOptionsComponent({ classes }: PopupOptionsStyles) {
  return (
    <>
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
