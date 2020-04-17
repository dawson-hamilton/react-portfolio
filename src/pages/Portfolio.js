import React from "react";
import Title from "../components/Title";
import Card from "../components/Cards";
import { Container, Row, Col } from "../components/Grid";
import cocktail from "../images/cocktail-searcher.png";
import photo from "../images/photo-page.png";
import weather from "../images/weather-page.png";
import planner from "../images/planner-page.png";
import budget from "../images/budget-page.png";
import password from "../images/password-page.png";

function Portfolio() {
    return (
        <Container fluid>
            <Title
                title="Portfolio"
                color="#f5ce62"
                blankLength="md-5"
                length="md-2"
            />
            <br />
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <Card
                        title="Cocktial Searcher"
                        description="Website where you can look up different recipes to different cocktails of your choice."
                        src={cocktail}
                        alt="cocktail searcher home page"
                        href="https://project-2-cocktail-search.herokuapp.com/"
                    />
                </Col>
                <Col size="md-1"></Col>
                <Card
                    title="Photography Searcher"
                    description="Website where you can look up high resolution photos that wont be copyrighted."
                    src={photo}
                    alt="photography searcher home page"
                    href="https://dawson-hamilton.github.io/photography-searcher/"
                />
                <Col size="md-1"></Col>
                <Card
                    title="Weather App"
                    description="Website where you can search for the weather in cities around the world."
                    src={weather}
                    alt="weather app home page"
                    href="https://dawson-hamilton.github.io/weather-app/"
                />
            </Row>
            <br />
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <Card
                        title="Daily Planner"
                        description="Website where you can keep track of important events in your busy life."
                        src={planner}
                        alt="daily planner home page"
                        href="https://dawson-hamilton.github.io/daily-planner/"
                    />
                </Col>
                <Col size="md-1"></Col>
                <Card
                    title="Progressive Budget"
                    description="Website where you can keep track of all your spending habits on or offline."
                    src={budget}
                    alt="progressive budget home page"
                    href="https://cryptic-taiga-45369.herokuapp.com/"
                />
                <Col size="md-1"></Col>
                <Card
                    title="Password Generator"
                    description="Website where you can create random passwords based on your criteria."
                    src={password}
                    alt="random password home page"
                    href="https://dawson-hamilton.github.io/random-password/"
                />
            </Row>
        </Container>
    );
}

export default Portfolio;