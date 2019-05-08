import React from 'react';
import './App.scss';
import {Container, Row, Col} from 'react-bootstrap';
import Underline from './Letters/Underline';

function App() {
  return (
    <Container>
      <Row>
        <Col>Tedžvid</Col>
      </Row>
      <Row>
        <Col>
          <Underline>
            A
          </Underline>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
