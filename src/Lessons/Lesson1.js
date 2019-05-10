import React from 'react';
import data from '../Data/L1Data.json';

// Bootstrap
import {Row, Col, Button} from 'react-bootstrap';

// Other
import '../App.scss';
import Arabic from '../Letters/Arabic';
import Player from '../Player/Player';

function L1() {
    const r1 = data.row1.map((dat) => {
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
        <nav className="mainmenu">
          <ul className="mainmenulist">
            <li className="mainmenuitem">Lekcije ١</li>
            <li className="mainmenuitem">Lekcije ٢</li>
            <li className="mainmenuitem">Lekcije ٣</li>
            <li className="mainmenuitem">Lekcije ٤</li>
            <li className="mainmenuitem">Lekcije ٥</li>
          </ul>
        </nav>

        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">Vakf</h2>
            <h4 className="text-center">stajanje prilikom učenja</h4>
            <hr/>
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            Prilikom učenja Kur'ana, učač može stati u sljedećim situacijama: ako je kraj ajeta, ako postoji znak za stajanje i kada mu ponestane daha. To čini na sljedeći način:
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije my-3">
            <strong>1.</strong>	Kada riječ na kojoj staje završava kratkim vokalom E  ــــــَــــــ , I   ـــــــِـــــ, U  ــــــُــــــ ili tenvinom IN ـــــٍــــــ ,  UN  ــــــٌــــــ, stat će kao da je na riječi sukun  ــــــْــــــ, npr.:
          </Col>
        </Row>
        
        <Row>
          <Col>
            { r1 }
          </Col>
        </Row>

        <hr/>
        <Row>
          <Col className="text-left">
            <Button variant="success" block>
              Prethodna lekcija
            </Button>
          </Col>
          <Col className="text-left">
            <Button variant="secondary" block>
              Na početak
            </Button>
          </Col>
          <Col className="text-right">
            <Button variant="success" block>
              Sljedeća lekcija
            </Button>
          </Col>
        </Row>

        </React.Fragment>
    );
  }

  export default L1;