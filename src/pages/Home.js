import React from "react";
import { Container, Row, Col } from "../components/Grid";
import ProfileImage from "../components/ProfileImage";

function Home() {
    return (
        <Container fluid>
            <ProfileImage />
            <Row>
                <Col size="md-3"></Col>
                <Col size="md-6" className="underImage">
                    <h1 className="underImageInfo">Dawson Hamilton</h1>
                    <hr className="hr" />
                    <h1 className="underImageInfo">Web Developer</h1>
                </Col>
                <Col size="md-3"></Col>
            </Row>
        </Container>
    );
}

export default Home;