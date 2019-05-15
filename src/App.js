import React from 'react';
import Home from './Body/HomePage';
import Header from './Body/MainHeader';

import L1 from './Lessons/Lesson1';
import L2 from './Lessons/Lesson2';
import L3 from './Lessons/Lesson3';
import L4 from './Lessons/Lesson4';
import L5 from './Lessons/Lesson5';
import L6 from './Lessons/Lesson6';
import L7 from './Lessons/Lesson7';
import L8 from './Lessons/Lesson8';
import L9 from './Lessons/Lesson9';
import L10 from './Lessons/Lesson10';
import L11 from './Lessons/Lesson11';
import L12 from './Lessons/Lesson12';

import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Container className="lekcije-wrapper my-auto">
        <Header/>

        <Route path="/" exact component={Home}/>
        <Route path="/lekcija1" component={L1}/>
        <Route path="/lekcija2" component={L2}/>
        <Route path="/lekcija3" component={L3}/>
        <Route path="/lekcija4" component={L4}/>
        <Route path="/lekcija5" component={L5}/>
        <Route path="/lekcija6" component={L6}/>
        <Route path="/lekcija7" component={L7}/>
        <Route path="/lekcija8" component={L8}/>
        <Route path="/lekcija9" component={L9}/>
        <Route path="/lekcija10" component={L10}/>
        <Route path="/lekcija11" component={L11}/>
        <Route path="/lekcija12" component={L12}/>

      </Container>
    </BrowserRouter>
  );
}

export default App;
