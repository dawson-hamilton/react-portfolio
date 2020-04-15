import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about-me"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/discover"
                            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/tech" ? "nav-link active" : "nav-link"}
                        >
                            Tech
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/contact-info" ? "nav-link active" : "nav-link"}
                        >
                            Contact Info
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;