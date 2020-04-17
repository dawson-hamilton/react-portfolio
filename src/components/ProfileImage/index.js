import React from "react";
import image from "./dawson-hamilton.jpg";
import { Row, Col } from "../Grid"
import "./style.css";

function ProfileImage() {
    return (
        <Row>
            <Col size="md-5"></Col>
            <Col size="md-2">
                <img src={image} className="profileImage" />
            </Col>
            <Col size="md-5"></Col>
        </Row>
    );
}

export default ProfileImage;