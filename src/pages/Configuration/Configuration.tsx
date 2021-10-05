import { Box } from '@material-ui/core';
import * as React from 'react';
import { LinkTableContainer, ResetDataContainer, SelectPageContainer } from './components';

export function Configuration() {
  return (
    <Box>
      <LinkTableContainer />
      <Box mt={3}>
        <SelectPageContainer />
      </Box>
      <Box mt={3}>
        <ResetDataContainer />
      </Box>
    </Box>
  );
}
