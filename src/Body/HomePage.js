import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import First from '../Body/HomeFirst';
import Second from '../Body/HomeSecond';

function Home() {
    const [otherpage, pageClick] = useState(false);

    const pageClickHandler = () => {
        console.log('next page')
        return pageClick(!otherpage);
    }

    return <React.Fragment>
        { !otherpage ? <First /> : <Second /> } 
        <Row className="homearea mt-4">
            <Col className="text-right">
                <Button onClick={pageClickHandler} variant="light" size="md" block>
                    { !otherpage ? "Lekcije od 13 do 22" : "Lekcije od 1 do 12" }
                </Button>
            </Col>
        </Row>

    </React.Fragment>
}

export default Home;