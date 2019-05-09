import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(
    () => {
      if (playing) {
        audio.play();
        audio.onended = () => { setPlaying(!playing) };
        audio.volume = 0.1;
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    },
    [audio, playing]
  );

  return [playing, toggle];
};

const Player = (props) => {
  const [playing, toggle] = useAudio(props.url);

  return (
      <span
          id='rijeciAudio'
          className={ playing ? 'svira' : 'ne-svira' }
          onClick={toggle}
      >
          { playing ? props.children : props.children }
      </span>
  );
};

export default React.memo(Player);