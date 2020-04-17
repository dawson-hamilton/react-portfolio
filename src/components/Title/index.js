import React from "react";
import { Row, Col, Container } from "../Grid";
import "./style.css";

function Title(props) {
    return (
        <Container fluid>
            <Row>
                <Col size={props.blankLength}></Col>
                <Col size={props.length}>
                    <h1 className="title" style={{ color: props.color }}>{props.title}</h1>
                </Col>
                <Col size="md-5"></Col>
            </Row >
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

export default Title;