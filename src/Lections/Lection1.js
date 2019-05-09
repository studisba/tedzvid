import React, { useState } from 'react';

// Bootstrap
import {Container, Row, Col} from 'react-bootstrap';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

// Other
import '../App.scss';
import Arabic from '../Letters/Arabic';
import Bosnian from '../Letters/Bosnian';
import Player from '../Player/Player';

function L1() {
    return (
        <React.Fragment>
        <Row>
          <Col>Tedžvid - Lekcija 1</Col>
        </Row>
        <Row>
          <Col>
            <Arabic>
              مَاخَلَ‍قْ<Player
                url='../assets/audio/1 men nesaau.mp3'
                arabic='قَ'
              />
            </Arabic>
            <Bosnian>
              čita se:
            </Bosnian>
            <Arabic>
              مَاخَلَ‍<Player 
                url='../assets/audio/1 men nesaau.mp3'
                arabic='قَ'
              /> ; سَوَآ<Player
                url='../assets/audio/1 men nesaau.mp3'
                arabic='ءٌ'
              />
            </Arabic>
          </Col>
        </Row>
        </React.Fragment>
    );
  }

  export default L1;