import React from "react";

const Button = (props) => {
    return(
        <button className="button" onClick={props.method}>{props.name}</button>
    )
}
export default Button;