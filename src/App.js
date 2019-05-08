import React from 'react';

// Bootstrap
import {Container, Row, Col} from 'react-bootstrap';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

// Other
import './App.scss';
import Underline from './Letters/Underline';
import Player from './Player/Player';

library.add(faMoon);

function App() {
  return (
    <Container>
      <Row>
        <Col>Tedžvid</Col>
      </Row>
      <Row>
        <Col>
          <Underline>
            <FontAwesomeIcon icon="moon" /> A
            <Player url='../assets/audio/1 men nesaau.mp3'>
              MURTIČ
            </Player>
            <Player url='../assets/audio/1 men nesaau.mp3'>
              MURTA
            </Player>
          </Underline>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
