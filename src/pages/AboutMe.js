import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Title from "../components/Title";

function AboutMe() {
    return (
        <Container fluid>
            <Title
                title="About Me"
                color="#fe6076"
            />
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
                    <hr className="hr" />

                </Col>
                <Col size="md-2"></Col>
            </Row>
        </Container>
    );
}

export default AboutMe;