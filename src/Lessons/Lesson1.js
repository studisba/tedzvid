import React from 'react';
import data from '../Data/L1Data.json';

// Bootstrap
import {Row, Col} from 'react-bootstrap';

// Other
import '../App.scss';
import Arabic from '../Letters/Arabic';
import Player from '../Player/Player';

function L1() {
    console.log(data);

    const r1 = data.lekcije.map((dat) => {
      return <span key={'key' + dat.id}>
      <Player url={dat.url} key={'p' + dat.id}>
        <Arabic
          arabic={dat.highlight}
          key={'a' + dat.id}
        >{dat.word}</Arabic>
      </Player> {dat.after === 'break' ? <br/> : dat.after}
      </span>
    });

    return (
        <React.Fragment>

        <Row>
          <Col>
            <h2 className="text-center font-weight-bold">IDGAM MEAL-GUNNEH</h2>
            <h4 className="text-center">uklapanje sa propuštanjem zraka kroz nos</h4>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col className="opisLekcije">
          Kada poslije harfa N sa sukunom (نْ) ili tenvina EN  ــــــًــــــ, IN ـــــٍــــــ , UN  ــــــٌـــــ dođe jedan od četiri harfa: <Arabic bold={true}>ي م ن و</Arabic> (sadržana u riječi jemnu – يَمْنُو), dolazi do uklapanja harfa N (ن) u jedan od spomenuta četiri harfa, propuštajući zrak kroz nos u trajanju od 2 hareketa, npr.:
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col>
            { r1 }
          </Col>
        </Row>

        </React.Fragment>
    );
  }

  export default L1;