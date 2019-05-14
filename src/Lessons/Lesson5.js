import React from 'react';
import data from '../Data/L5Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
//import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import {Row, Col} from 'react-bootstrap';

// Other
import '../App.scss';

function L5() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">IDGAM MISLEJN MEAL-GUNNEH</h2>
            <h4 className="text-center">uklapanje istih harfova sa propuštanjem zraka kroz nos</h4>
            <hr/>
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            Kada poslije harfa  M (م) sa sukunom dođe harf M (م) sa hareketom, dolazi do uklapanja harfa M (م) sa sukunom u harf M (م) sa hareketom, uz propuštanje zraka kroz nos u trajanju od 2 hareketa, npr.:
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
            VJEŽBE 5
          </Col>
        </Row>

        <Footer prev="/lekcija4" next="/lekcija6" />

        </React.Fragment>
    );
  }

  export default L5;