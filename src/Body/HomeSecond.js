import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeSecond() {

    return <React.Fragment><Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija13" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>KALKALA <Badge className="imelekcije" variant="light">Lekcija 13</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">odskakanje harfova</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija14" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>HUKMURRA <Badge className="imelekcije" variant="light">Lekcija 14</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">izgovor harfa R (ر)</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija3" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MISLEJN <Badge className="imelekcije" variant="light">Lekcija 15</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje istih harfova</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija4" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MISLEJN MEAL-GUNNEH <Badge className="imelekcije" variant="light">Lekcija 16</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje istih harfova sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <Badge className="imelekcije" variant="light">Lekcija 17</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <Badge className="imelekcije" variant="light">Lekcija 18</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <Badge className="imelekcije" variant="light">Lekcija 19</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <Badge className="imelekcije" variant="light">Lekcija 20</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <Badge className="imelekcije" variant="light">Lekcija 21</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <Badge className="imelekcije" variant="light">Lekcija 22</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>
        </React.Fragment>;

}

export default HomeSecond;