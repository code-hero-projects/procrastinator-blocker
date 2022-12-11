import { StopProcrastinationProps, VideoPlayer } from 'components';
import { HARRY_POTTER } from 'pages/assets';
import * as React from 'react';

export const HarryPotter = ({ onFinish }: StopProcrastinationProps) => <VideoPlayer onFinish={onFinish} video={HARRY_POTTER} />;
