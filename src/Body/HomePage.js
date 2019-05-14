import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return <React.Fragment>
        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija1" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>VAKF <span className="imelekcije">Lekcija 1</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Stajanje prilikom učenja</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija2" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>LAFZATULLAH <span className="imelekcije">Lekcija 2</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Izgovaranje riječi Allah اللّٰه</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija3" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MISLEJN <span className="imelekcije">Lekcija 3</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje istih harfova</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija4" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MISLEJN MEAL-GUNNEH <span className="imelekcije">Lekcija 4</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje istih harfova sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <span className="imelekcije">Lekcija 5</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <span className="imelekcije">Lekcija 6</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>
        
        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <span className="imelekcije">Lekcija 7</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <span className="imelekcije">Lekcija 8</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <span className="imelekcije">Lekcija 9</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <span className="imelekcije">Lekcija 10</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col>
                <Link to="/lekcija5" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM MEAL-GUNNEH <span className="imelekcije">Lekcija 11</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje sa propuštanjem zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
            <Col>
                <Link to="/lekcija6" style={{ color: 'inherit' }}><Card>
                    <Card.Body>
                        <Card.Title>IDGAM BILA GUNNEH <span className="imelekcije">Lekcija 12</span></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Uklapanje bez propuštanja zraka kroz nos</Card.Subtitle>
                    </Card.Body>
                </Card></Link>
            </Col>
        </Row>

        <Row className="homearea mt-4">
            <Col className="text-right">
                <Button variant="secondary" size="lg">
                    Lekcije od 13 do 22
                </Button>
            </Col>
        </Row>

    </React.Fragment>
}

export default Home;