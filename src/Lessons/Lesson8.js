import React from 'react';
import data from '../Data/L8Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
//import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import {Row, Col} from 'react-bootstrap';

// Other
import '../App.scss';

function L8() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">IKLAB</h2>
            <h4 className="text-center">pretvaranje harfa N (ن) u harf M (م)</h4>
            <hr/>
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
          Kada poslije harfa N sa sukunom (نْ) ili tenvina EN  ــــــًــــــ, IN ـــــٍــــــ , UN  ــــــٌـــــ dođe harf B (ب), onda se harf N (ن) pretvara u harf M (م) u trajanju od 2 hareketa:
          </Col>
        </Row>

        <Row>
          <Col>
            { PlayerRow(data, 'row1') }
          </Col>
        </Row>

        <Row>
          <Col>
            { PlayerRow(data, 'row2') }
          </Col>
        </Row>

        <Row>
          <Col>
            { PlayerRow(data, 'row3') }
          </Col>
        </Row>

        <h2 className="text-center">Vježbe</h2>

        <hr/>

        <Row className="text-center">
          <Col>
            VJEŽBE 8
          </Col>
        </Row>

        <Footer prev="/lekcija7" next="/lekcija9" />

        </React.Fragment>
    );
  }

  export default L8;