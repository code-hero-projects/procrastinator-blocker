import { StopProcrastinationProps, VideoPlayer } from 'components';
import { PULP_FICTION } from 'pages/assets';
import * as React from 'react';

export const PulpFiction = ({ onFinish }: StopProcrastinationProps) => <VideoPlayer onFinish={onFinish} video={PULP_FICTION} />;
