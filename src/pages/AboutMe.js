import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

function AboutMe() {
    return (
        <Container fluid>
            <br />
            <br />
            <br />
            <Title
                title="About Me"
                color="#fe6076"
                blankLength="md-5"
                length="md-2"
            />
            <br />
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
                    <Paragraph />
                </Col>
                <Col size="md-2"></Col>
            </Row>
        </Container >
    );
}

export default AboutMe;