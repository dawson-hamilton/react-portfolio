import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" id="navbarLinks">
                    <Nav.Link><Link to="/react-portfolio" className="headerLinks" id="home">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/about-me" className="headerLinks" id="one">About Me</Link></Nav.Link>
                    <Nav.Link><Link to="/portfolio" className="headerLinks" id="two">Portfolio</Link></Nav.Link>
                    <Nav.Link><Link to="/tech" className="headerLinks" id="three">Tech Skills</Link></Nav.Link>
                    <Nav.Link><Link to="/contact-info" className="headerLinks" id="four">Contact Info</Link></Nav.Link>
                </Nav >
            </Navbar.Collapse >
        </Navbar >
    );
}

export default Header;