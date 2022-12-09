import { Box } from '@material-ui/core';
import * as React from 'react';
import { LinkTableContainer, ResetDataContainer, SelectPageContainer } from './components';
import { TimerSetupContainer } from './components/TimerSetup';

export interface ConfigurationProps {
  procrastinate: boolean;
}

export function Configuration({ procrastinate }: ConfigurationProps) {
  return (
    <Box>
      {procrastinate && <TimerSetupContainer />}
      <Box mt={procrastinate ? 3 : 0}>
        <LinkTableContainer procrastinate={procrastinate} />
      </Box>
      <Box mt={3}>
        <SelectPageContainer />
      </Box>
      {procrastinate && <Box mt={3}>
        <ResetDataContainer />
      </Box>}
    </Box>
  );
}
