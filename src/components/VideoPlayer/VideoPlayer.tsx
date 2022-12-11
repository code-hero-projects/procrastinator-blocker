import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { BrowserManager } from 'browserManager';
import { StopProcrastinationProps } from 'components';
import { playMedia } from 'components/utils';
import * as React from 'react';
import { useRef } from 'react';

const styles = () =>
  createStyles({
    video: {
      width: '100%',
      height: '100vh',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0
    }
  });

interface VideoPlayerProps extends StopProcrastinationProps {
  video: string;
}

type VideoPlayerPropsStyles = VideoPlayerProps & WithStyles<typeof styles>;

function VideoPlayerComponent({ video, onFinish, classes }: VideoPlayerPropsStyles) {
  const videoURL = BrowserManager.getAssetUrl(video);
  const videoRef = useRef(null);

  const onLoadedData = () => playMedia(videoRef);

  return (
    <video autoPlay onEnded={onFinish} onLoadedData={onLoadedData} ref={videoRef} className={classes.video}>
      <source src={videoURL} type='video/mp4' />
    </video>
  );
}

export const VideoPlayer = withStyles(styles)(VideoPlayerComponent);
