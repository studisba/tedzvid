import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeSecond() {

    return <React.Fragment><Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija1" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>VAKF <span className="imelekcije">Lekcija 13</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Stajanje prilikom učenja</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija2" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>LAFZATULLAH <span className="imelekcije">Lekcija 14</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Izgovaranje riječi Allah اللّٰه</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija3" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MISLEJN <span className="imelekcije">Lekcija 15</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje istih harfova</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija4" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MISLEJN MEAL-GUNNEH <span className="imelekcije">Lekcija 16</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje istih harfova sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <span className="imelekcije">Lekcija 17</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <span className="imelekcije">Lekcija 18</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <span className="imelekcije">Lekcija 19</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <span className="imelekcije">Lekcija 20</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <span className="imelekcije">Lekcija 21</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <span className="imelekcije">Lekcija 22</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>
        </React.Fragment>;

}

export default HomeSecond;