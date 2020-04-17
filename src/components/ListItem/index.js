import React from "react";

function ListItem(props) {
    return (
        <li className="list-group-item listItems">{props.listItem}</li>
    );
}

export default ListItem;