import React from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";

function Contact() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-4"></Col>
                <Col size="md-4">
                    <h1 className="contactInfo">Resume: <a href="https://drive.google.com/file/d/1HZhU5Mnf0zZqAdSG38CY2PmING_AyTed/view?usp=sharing" target="blank">
                        <i class="fas fa-file-pdf" id="resume"></i></a></h1>
                </Col>
                <Col size="md-4"></Col>
            </Row>
            <Row>
                <Col size="md-3"></Col>
                <Col size="md-6">
                    <h1 className="contactInfo">email: dawsondhamilton@gmail.com</h1>
                </Col>
                <Col size="md-3"></Col>
            </Row>
            <Row>
                <Col size="md-3"></Col>
                <Col size="md-6">
                    <h1 className="contactInfo">phone number: 385-274-8009</h1>
                </Col>
                <Col size="md-3"></Col>
            </Row>
            <Row>
                <Col size="md-3"></Col>
                <Col size="md-6">
                    <h1 className="contactInfo">social: </h1>
                    <a href="https://github.com/dawson-hamilton" target="blank"><i className="fab fa-github"
                        id="contactIcons"></i></a>
                    <a href="https://www.linkedin.com/in/dawson-hamilton-a33025190/" target="blank"><i
                        className="fab fa-linkedin-in" id="contactIcons"></i></a>
                    <a href="https://www.facebook.com/dawson.hamilton.547" target="blank"><i className="fab fa-facebook-f"
                        id="contactIcons"></i></a>
                </Col>
                <Col size="md-3"></Col>
            </Row>
        </Container>
    );
}

export default Contact;