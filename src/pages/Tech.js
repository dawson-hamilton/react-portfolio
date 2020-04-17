import React from "react";
import Title from "../components/Title";
import { Row, Col, Container } from "../components/Grid";
import ListItem from "../components/ListItem";
import "../components/ListItem/style.css";

function Tech() {
    return (
        <Container fluid>
            <Title
                title="Tech"
                color="#667eea"
                blankLength="md-5"
                length="md-2"
            />
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <h1 className="techTitles">The Browser: </h1>
                    <ul className="list-group">
                        <ListItem
                            listItem="HTML"
                        />
                        <ListItem
                            listItem="CSS"
                        />
                        <ListItem
                            listItem="JavaScript"
                        />
                        <ListItem
                            listItem="jQuery"
                        />
                        <ListItem
                            listItem="Bootstrap"
                        />
                        <ListItem
                            listItem="React.js"
                        />
                    </ul>
                </Col>
                <Col size="md-1"></Col>
                <Col size="md-2">
                    <h1 className="techTitles">API Interaction: </h1>
                    <ul className="list-group">
                        <ListItem
                            listItem="APIs"
                        />
                        <ListItem
                            listItem="JSON"
                        />
                        <ListItem
                            listItem="AJAX"
                        />
                        <ListItem
                            listItem="Real Time Cloud Database via Firebase"
                        />
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <h1 className="techTitles">Databases: </h1>
                    <ul className="list-group">
                        <ListItem
                            listItem="MySQL"
                        />
                        <ListItem
                            listItem="MongoDB"
                        />
                        <ListItem
                            listItem="Sequelize"
                        />
                        <ListItem
                            listItem="Mongoose"
                        />
                    </ul>
                </Col>
                <Col size="md-1"></Col>
                <Col size="md-2">
                    <h1 className="techTitles">Dev Tools: </h1>
                    <ul className="list-group">
                        <ListItem
                            listItem="Heroku"
                        />
                        <ListItem
                            listItem="Git"
                        />
                        <ListItem
                            listItem="GitHub"
                        />
                    </ul>
                </Col>
            </Row>
            <div className="bottom">
                <h1 className="techTitles">Server Side: </h1>
                <ul className="list-group">
                    <ListItem
                        listItem="Template Engines"
                    />
                    <ListItem
                        listItem="Sessions"
                    />
                    <ListItem
                        listItem="Writing Tests"
                    />
                    <ListItem
                        listItem="Node.js"
                    />
                    <ListItem
                        listItem="Express.js"
                    />
                    <ListItem
                        listItem="Creating APIs"
                    />
                    <ListItem
                        listItem="MVC"
                    />
                    <ListItem
                        listItem="User Authentication"
                    />
                    <ListItem
                        listItem="ORM"
                    />
                </ul>
            </div>
        </Container >
    );
}
export default Tech;