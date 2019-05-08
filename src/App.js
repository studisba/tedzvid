import React from 'react';

// Bootstrap
import {Container, Row, Col} from 'react-bootstrap';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// Other
import './App.scss';
import Underline from './Letters/Underline';

library.add(faStroopwafel);

function App() {
  return (
    <Container>
      <Row>
        <Col>Tedžvid</Col>
      </Row>
      <Row>
        <Col>
          <Underline>
            <FontAwesomeIcon icon="stroopwafel" /> A
          </Underline>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
