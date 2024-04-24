import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


interface PlayerProps {
  autoPlay: boolean;
  src: string;
}


export const Player = (
  {autoPlay, src}: PlayerProps
) => (
  <AudioPlayer
    autoPlay={autoPlay}
    src={src}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);