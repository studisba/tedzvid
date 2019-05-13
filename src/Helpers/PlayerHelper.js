import React from 'react';
import Player from '../Player/Player';
import Arabic from '../Letters/Arabic';

function PRow(data, rowname) {
    const PlayerRow = (datarr, rowname) => {
        const row = datarr[rowname].map((dat) => {
        return <span key={'key' + dat.id}>
        <Player url={dat.url} key={'p' + dat.id}>
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