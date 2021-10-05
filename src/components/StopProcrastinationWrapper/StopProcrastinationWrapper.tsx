import { Box } from '@material-ui/core';
import * as React from 'react';
import { StopProcrastinationWarning } from './StopProcrastinationWarning';

interface StopProcrastinationWrapperProps {
  StopProcrastinationComponent: any;
}

function StopProcrastinationWrapperComponent({ StopProcrastinationComponent }: StopProcrastinationWrapperProps) {
  const [finished, setFinished] = React.useState<boolean>(false);

  return (
    <Box>
      {!finished
          ? <StopProcrastinationComponent onFinish={() => {setFinished(true)}} />
          : <StopProcrastinationWarning />}
    </Box>
  );
}

export const StopProcrastinationWrapper = StopProcrastinationWrapperComponent;
