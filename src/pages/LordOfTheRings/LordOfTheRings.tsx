import { StopProcrastinationProps, VideoPlayer } from 'components';
import { LORD_OF_THE_RINGS } from 'pages/assets';
import * as React from 'react';

export const LordOfTheRings = ({ onFinish }: StopProcrastinationProps) => <VideoPlayer onFinish={onFinish} video={LORD_OF_THE_RINGS} />;
