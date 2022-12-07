import { Box } from '@material-ui/core';
import * as React from 'react';
import { LinkTableContainer, ResetDataContainer, SelectPageContainer } from './components';
import { TimerSetupContainer } from './components/TimerSetup';

export function Configuration() {
  return (
    <Box>
      <TimerSetupContainer />
      <Box mt={3}>
        <LinkTableContainer />
      </Box>
      <Box mt={3}>
        <SelectPageContainer />
      </Box>
      <Box mt={3}>
        <ResetDataContainer />
      </Box>
    </Box>
  );
}
