import React from "react";
import Title from "../components/Title";
import { Container } from "../components/Grid";
import Contact from "../components/Contact";

function ContactInfo() {
    return (
        <Container fluid>
            <br />
            <br />
            <Title
                title="Contact Info"
                color="#84fab0"
                blankLength="md-4"
                length="md-4"
            />
            <Contact />
        </Container>
    );
}
export default ContactInfo;