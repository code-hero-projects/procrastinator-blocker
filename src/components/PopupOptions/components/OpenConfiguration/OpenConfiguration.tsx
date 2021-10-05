import { Button, createStyles, withStyles, WithStyles } from '@material-ui/core';
import { BrowserManager } from 'browserManager';
import * as React from 'react';

const styles = () =>
  createStyles({
    button: {
      border: 0,
      padding: '5px 10px',
      width: '100%',
      cursor: 'pointer'
    },
  });

type OpenConfigurationStyles = WithStyles<typeof styles>;

function OpenConfigurationComponent({ classes }: OpenConfigurationStyles) {
  const showOptionsPage = () => BrowserManager.openOptionsPage();
  return (
    <Button className={classes.button} variant='contained' color='primary' onClick={showOptionsPage}>
      Options
    </Button>
  );
}

export const OpenConfiguration = withStyles(styles)(OpenConfigurationComponent);
