import React from 'react';
import data from '../Data/L6Data.json';
import Footer from '../Body/MainFooter';

// Bootstrap
import {Row, Col} from 'react-bootstrap';

// Other
import '../App.scss';
import Arabic from '../Letters/Arabic';
import Player from '../Player/Player';

function L6() {
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

    const r2 = data.row2.map((dat) => {
      return <span key={'key' + dat.id}>
      <Player url={dat.url} key={'p' + dat.id}>
        <Arabic
          arabic={dat.highlight}
          key={'a' + dat.id}
        >{dat.word}</Arabic>
      </Player> {dat.after === 'break' ? <br/> : dat.after}
      </span>
    });
    
    const r3 = data.row3.map((dat, ind) => {
      return <Arabic
          arabic={dat.highlight}
          key={'a' + dat.id}
        >{dat.word}</Arabic>
    });

    const v1 = data.vj1.map((dat) => {
      return <span key={'key' + dat.id}>
      <Player url={dat.url} key={'p' + dat.id}>
          <Arabic
          arabic={dat.highlight}
          key={'a' + dat.id}
          >{dat.word}</Arabic>
      </Player> {dat.after === 'break' ? <br/> : dat.after}
      </span>
    });

    const v2 = data.vj2.map((dat) => {
      return <Arabic
          arabic={dat.highlight}
          key={'a' + dat.id}
          >{dat.word}</Arabic>
    });

    const v3 = data.vj3.map((dat) => {
      return <span key={'key' + dat.id}>
      <Player url={dat.url} key={'p' + dat.id}>
          <Arabic
          arabic={dat.highlight}
          key={'a' + dat.id}
          >{dat.word}</Arabic>
      </Player> {dat.after === 'break' ? <br/> : dat.after}
      </span>
    });

    const v4 = data.vj4.map((dat) => {
      return <Arabic
          arabic={dat.highlight}
          key={'a' + dat.id}
          >{dat.word}</Arabic>
    });

    const v5 = data.vj5.map((dat) => {
      return <Arabic
          arabic={dat.highlight}
          key={'a' + dat.id}
          >{dat.word}</Arabic>
    });

    const v6 = data.vj6.map((dat) => {
      return <Arabic
          arabic={dat.highlight}
          key={'a' + dat.id}
          >{dat.word}</Arabic>
    });

    const v7 = data.vj7.map((dat) => {
      return <Arabic
          arabic={dat.highlight}
          key={'a' + dat.id}
          >{dat.word}</Arabic>
    });

    const v8 = data.vj8.map((dat) => {
      return <Arabic
          arabic={dat.highlight}
          key={'a' + dat.id}
          >{dat.word}</Arabic>
    });

    const v9 = data.vj9.map((dat) => {
      return <Arabic
          arabic={null}
          key={'a' + dat.id}
          >{dat.word}</Arabic>
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
        
        <Row className="mt-2">
          <Col>
            { r1 }
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            { r2 }
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <span key={'key' + data.row3[0].id}>
              <Player url={data.row3[0].url} key={'p' + data.row3[0].id}>
                { r3 }
              </Player>
            </span> { data.row3[0].after }
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <h2 className="text-center font-weight-bold">Vježba</h2>
            <hr/>
          </Col>
        </Row>

        <Row className="px-4 py-2 text-center">
          <Col>
              { v1 }

              <span key={'key' + data.vj2[0].id}>
                <Player url={data.vj2[0].url} key={'p' + data.vj2[0].id}>
                  { v2 }
                </Player>
              </span> { data.vj2[0].after }

              { v3 }

              <span key={'key' + data.vj4[0].id}>
                <Player url={data.vj4[0].url} key={'p' + data.vj4[0].id}>
                  { v4 }
                </Player>
              </span> { data.vj4[0].after }

              { v5 } { data.vj4[0].after }

              <span key={'key' + data.vj6[0].id}>
              <Player url={data.vj6[0].url} key={'p' + data.vj6[0].id}>
                { v6 }
              </Player>
            </span> { data.vj6[0].after }

            <span key={'key' + data.vj7[0].id}>
              <Player url={data.vj7[0].url} key={'p' + data.vj7[0].id}>
                { v7 }
              </Player>
            </span> { data.vj7[0].after }

            <span key={'key' + data.vj8[0].id}>
              <Player url={data.vj8[0].url} key={'p' + data.vj8[0].id}>
                { v8 }
              </Player>
            </span> { data.vj8[0].after }

            { v9 }

          </Col>
        </Row>

        <Footer prev="/lekcija5" next="/lekcija7" />

        </React.Fragment>
    );
  }

  export default L6;