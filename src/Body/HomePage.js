import React from 'react';
import Header from './MainHeader';
import { Row, Col } from 'react-bootstrap';

function Home() {
    return <React.Fragment>
    <Header />
    <Row>
        <Col>
            HOMEPAGE
        </Col>
    </Row></React.Fragment>
}

export default Home;