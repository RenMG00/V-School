import React from "react";

const Buttons = (props) => {
    return (
        <button onClick={props.method}>{props.name}</button>
    );
}

export default Buttons;