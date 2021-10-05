import { Box, createStyles, WithStyles, withStyles } from '@material-ui/core';
import classnames from 'classnames';
import * as React from 'react';

const styles = () =>
  createStyles({
    root: {
      height: '100%'
    },
  });

interface CenterProps {
  className?: string;
}

type CenterStyles = CenterProps & WithStyles<typeof styles>;

function CenterComponent({ className, children, classes }: React.PropsWithChildren<CenterStyles>) {
  return (
    <Box justifyContent='center' alignItems='center' display='flex' className={classnames(classes.root, className)}>
      {children}
    </Box>
  );
}

export const Center = withStyles(styles)(CenterComponent);
