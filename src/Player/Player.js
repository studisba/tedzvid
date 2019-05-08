import React, { useState, useEffect } from "react";

const useAudio = url => {
  // TODO: SET State properly
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(
    () => {
      if (playing) {
        audio.play();
        audio.onended = () => { setPlaying(!playing) };
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
    <div>
        <span
            className={ playing ? 'svira' : 'ne-svira' }
            onClick={toggle}
        >
            { playing ? 'Svira ' + props.children : props.children }
        </span>
    </div>
  );
};

export default Player;