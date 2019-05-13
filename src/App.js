import React from 'react';
import Home from './Body/HomePage';

import L1 from './Lessons/Lesson1';
import L6 from './Lessons/Lesson6';

import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Container className="lekcije-wrapper my-auto">
        <Route path="/" exact component={Home}/>
        <Route path="/lekcija1" component={L1}/>
        <Route path="/lekcija6" component={L6}/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
