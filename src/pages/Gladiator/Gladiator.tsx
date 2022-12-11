import { StopProcrastinationProps, VideoPlayer } from 'components';
import { GLADIATOR } from 'pages/assets';
import * as React from 'react';

export const Gladiator = ({ onFinish }: StopProcrastinationProps) => <VideoPlayer onFinish={onFinish} video={GLADIATOR} />;
