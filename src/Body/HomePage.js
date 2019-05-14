import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return <React.Fragment>
        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija1" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>VAKF</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Stajanje prilikom učenja</Card.Subtitle>
                        <Card.Text>
                            Lekcija 1
                        </Card.Text>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija2" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>LAFZATULLAH</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Izgovaranje riječi Allah اللّٰه</Card.Subtitle>
                        <Card.Text>
                            Lekcija 2
                        </Card.Text>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija3" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MISLEJN</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje istih harfova</Card.Subtitle>
                        <Card.Text>
                            Lekcija 3
                        </Card.Text>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija4" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MISLEJN MEAL-GUNNEH</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje istih harfova sa propuštanjem zraka kroz nos</Card.Subtitle>
                        <Card.Text>
                            Lekcija 4
                        </Card.Text>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                        <Card.Text>
                            Lekcija 5
                        </Card.Text>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                        <Card.Text>
                            Lekcija 6
                        </Card.Text>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>
    </React.Fragment>
}

export default Home;