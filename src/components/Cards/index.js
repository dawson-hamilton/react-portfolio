import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card portfolioCards" style={{ width: '18rem' }}>
            <img src={props.src} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <ul>
                    <li>{props.itemOne}</li>
                    <li>{props.itemTwo}</li>
                    <li>{props.itemThree}</li>
                    <li><a href={props.aHref} target="blank">Github Repository</a></li>
                </ul>
                {/* <p className="card-text">{props.description}</p> */}
                <a href={props.href} target="blank"><button className="btn-hover color-1">{props.title}</button></a>
            </div>
        </div>
    );
}

export default Card;