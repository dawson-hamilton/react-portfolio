import React from "react";
import { Container } from "../components/Grid";
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
            <Paragraph />
        </Container >
    );
}

export default AboutMe;