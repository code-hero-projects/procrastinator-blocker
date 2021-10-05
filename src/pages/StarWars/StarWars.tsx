import { StopProcrastinationProps, VideoPlayer } from 'components';
import { STAR_WARS } from 'pages/assets';
import * as React from 'react';

export const StarWars = ({ onFinish }: StopProcrastinationProps) => <VideoPlayer onFinish={onFinish} video={STAR_WARS} />;
