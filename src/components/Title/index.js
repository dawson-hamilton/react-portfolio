import React from "react";
import { Row, Col } from "../Grid";
import "./style.css";

function Title(props) {
    return (
        <Row>
            <Col size="md-5"></Col>
            <Col size="md-2">
                <h1 className="title" style={{ color: props.color }}>{props.title}</h1>
            </Col>
            <Col size="md-5"></Col>
        </Row >
    );
}

export default Title;