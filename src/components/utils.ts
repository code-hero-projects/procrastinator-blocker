export const playMedia = (ref: any) => {
  const media = ref.current as HTMLMediaElement;
  const playPromise = media.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      media.muted = true;
      media.play();
    });
  }
}