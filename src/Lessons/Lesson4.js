import React from 'react';
import data from '../Data/L4Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
//import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import {Row, Col} from 'react-bootstrap';

// Other
import '../App.scss';

function L4() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">IDGAM MISLEJN</h2>
            <h4 className="text-center">uklapanje istih harfova</h4>
            <hr/>
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            Kada poslije bilo kojeg harfa sa sukunom   ــــــْــــــ dođe isti harf sa hareketom, dolazi do potpunog uklapanja, tj. prvi harf se ne uči, a drugi se uči sa tešdidom, npr.:
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
            VJEŽBE 4
          </Col>
        </Row>

        <Footer prev="/lekcija3" next="/lekcija5" />

        </React.Fragment>
    );
  }

  export default L4;