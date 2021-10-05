import { Box, Button, createStyles, Typography, withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';

const styles = () => createStyles({ 
  button: {
    marginLeft: '1%'
  }
});

interface ResetDataProps {
  handleOnResetDataClick(): void;
}

type ResetDataPropsStyles = ResetDataProps & WithStyles<typeof styles>;

function ResetDataComponent({ handleOnResetDataClick, classes}: ResetDataPropsStyles) {
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const onResetDataClick = () => setConfirmation(true);

  const onConfirmationClick = () => {
    setConfirmation(false);
    handleOnResetDataClick();
  };

  const onCancelClick = () => {
    setConfirmation(false);
  };

  return (
    <Box>
      {!confirmation 
        ? <Button variant='contained' color='secondary' onClick={onResetDataClick}>Reset options</Button>
        : <Box display='flex' alignItems='center'>
            <Typography variant='h6'>Are you sure you want to reset the options to default?</Typography>
            <Button variant='contained' color='secondary' onClick={onConfirmationClick} className={classes.button}>Yes</Button>
            <Button variant='contained' color='primary' onClick={onCancelClick} className={classes.button}>No</Button>
          </Box>
      }
    </Box>
  );
}

export const ResetData = withStyles(styles)(ResetDataComponent);
