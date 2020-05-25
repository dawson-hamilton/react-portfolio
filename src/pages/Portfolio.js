import React from "react";
import Title from "../components/Title";
import Card from "../components/Cards";
import { Container, Row, Col } from "../components/Grid";
import cocktail from "../images/cocktail-searcher.png";
import photo from "../images/photo-page.png";
import weather from "../images/weather-page.png";
import planner from "../images/planner-page.png";
import budget from "../images/budget-page.png";
import gigit from "../images/gigit-page.png";

function Portfolio() {
    return (
        <Container>
            <Title
                title="Portfolio"
                color="#f5ce62"
                blankLength="md-5"
                length="md-2"
            />
            <br />
            <Row>
                <Col size="md-2">
                    <Card
                        title="Gigit"
                        itemOne="Third party application where you can schedule gigs in different genres with a easy to use form."
                        itemTwo="My role in this app was all the front end components, a lot of the css work that went with those components
                        the starting of the app and the server, starting the navbar wiht all the different links that would work with Auth0."
                        itemThree="for this project we used HTML, CSS, Javascript, jQuery, MongoDB, Mongoose, React, React-Bootstrap, Express, Node, 
                        Auth0, Google Auth, Axios"
                        aHref="https://github.com/dawson-hamilton/devDivas"
                        src={gigit}
                        alt="gigit home page"
                        href="https://www.letsgigit.events"
                    />
                </Col>
                <Col size="md-2"></Col>
                <br />
                <Col size="md-2">
                    <Card
                        title="Cocktial Searcher"
                        itemOne="Website where you can look up different recipes to different cocktails of your choice."
                        itemTwo="My role in this project was mostly the frontend components like the buttons, searchbar, toggle button, and any 
                        other front end components. I also helped with the dynamic creation of the drink cards and with the map css."
                        itemThree="for this project we used HTML, CSS, Javascript, jQuery, MonoDB, Mongoose, Express, Node, google maps API, and a Cockitail DB API."
                        aHref="https://github.com/Braydon-Nelson/cocktail-search"
                        src={cocktail}
                        alt="cocktail searcher home page"
                        href="https://project-2-cocktail-search.herokuapp.com/"
                    />
                </Col>
                <Col size="md-2"></Col>
                <br />
                <Col size="md-2">
                    <Card
                        title="Photography Searcher"
                        itemOne="Website where you can look up high resolution photos that wont be copyrighted."
                        itemTwo="My role in this app was the front end components like the search bar and the puttons below and above it. I also create the front and back 
                        end for the NASA APOD page with the image and all the info about it."
                        itemThree="for this project we used HTML, CSS, javaScript, jQuery, Unsplash API, NASA APOD API, Bootstrap, local storage"
                        aHref="https://github.com/dawson-hamilton/photography-searcher"
                        src={photo}
                        alt="photography searcher home page"
                        href="https://dawson-hamilton.github.io/photography-searcher/"
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Col size="md-2">
                    <Card
                        title="Weather App"
                        itemOne="Website where you can search for the weather in cities around the world, and use the search history to look and already searched cities."
                        itemTwo="This website was one that I created on my own so I did all the front and back end work."
                        itemThree="For this website I used HTML, CSS, javaScript, jQuery, and the Open Weather API"
                        aHref="https://github.com/dawson-hamilton/weather-app"
                        src={weather}
                        alt="weather app home page"
                        href="https://dawson-hamilton.github.io/weather-app/"
                    />
                </Col>
                <Col size="md-2"></Col>
                <br />
                <Col size="md-2">
                    <Card
                        title="Progressive Budget"
                        itemOne="Website where you can keep track of all your spending habits, and then look at those habits online and offline."
                        itemTwo="This website was one that I created on my own so I did all the front and back end work."
                        itemThree="For this website I used Node.js, Javascript, jQuery, MongoDB, NPM Modules: Express, Mongoose, Morgan, MVC methodology"
                        aHref="https://github.com/dawson-hamilton/budget-tracker"
                        src={budget}
                        alt="progressive budget home page"
                        href="https://cryptic-taiga-45369.herokuapp.com/"
                    />

                </Col>
                <Col size="md-2"></Col>
                <br />
                <Col size="md-2">
                    <Card
                        title="Daily Planner"
                        itemOne="Website where you can keep track of important events in your busy life, and see what time bars are past, current, and future."
                        itemTwo="This website was one that I created on my own so I did all the front and back end work."
                        itemThree="For this website I used HTML, CSS, javaScript, jQuery, Bootstrap"
                        src={planner}
                        alt="daily planner home page"
                        href="https://dawson-hamilton.github.io/daily-planner/"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Portfolio;