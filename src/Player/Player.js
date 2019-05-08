import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  /* audio.onended = () => { 
      klasa = true;
    }; */

  const toggle = () => setPlaying(!playing);

  useEffect(
    () => {
      playing ? audio.play() : audio.pause();
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