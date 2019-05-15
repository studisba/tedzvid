import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeFirst() {

    return <React.Fragment><Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija1" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>VAKF <Badge className="imelekcije" variant="light">Lekcija 1</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Stajanje prilikom učenja</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija2" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>LAFZATULLAH <Badge className="imelekcije" variant="light">Lekcija 2</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Izgovaranje riječi Allah اللّٰه</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija3" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MISLEJN <Badge className="imelekcije" variant="light">Lekcija 3</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje istih harfova</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija4" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MISLEJN MEAL-GUNNEH <Badge className="imelekcije" variant="light">Lekcija 4</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje istih harfova sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <Badge className="imelekcije" variant="light">Lekcija 5</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <Badge className="imelekcije" variant="light">Lekcija 6</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <Badge className="imelekcije" variant="light">Lekcija 7</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <Badge className="imelekcije" variant="light">Lekcija 8</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <Badge className="imelekcije" variant="light">Lekcija 9</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <Badge className="imelekcije" variant="light">Lekcija 10</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <Badge className="imelekcije" variant="light">Lekcija 11</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <Badge className="imelekcije" variant="light">Lekcija 12</Badge></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>
        </React.Fragment>;

}

export default HomeFirst;