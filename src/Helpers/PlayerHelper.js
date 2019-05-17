import React, { useState } from 'react';
import Player from '../Player/Player';
import Arabic from '../Letters/Arabic';

function PRow(data, rowname) {
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);
    
    const PlayerRow = (datarr, rowname) => {
        const row = datarr[rowname].map((dat) => {
        return <span key={'key' + dat.id} onClick={toggle}>
            <Player url={dat.url} key={'p' + dat.id} playr={playing ? true : false}>
                <Arabic
                arabic={dat.highlight}
                key={'a' + dat.id}
                >{dat.word}</Arabic>
            </Player> {dat.after === 'break' ? <br/> : dat.after}
        </span>
        });
    
        return row;
    };

    return PlayerRow(data, rowname);
}

export default PRow;