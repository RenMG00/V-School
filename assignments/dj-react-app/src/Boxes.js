import React from "react";

const Boxes = (props) => {
    const style = {
        width: "200px",
        height: "150px",
        border: "1px solid grey",
        paddingTop: "50px",
        paddingBottom: "10px",
        boxShadow: "2px 2px grey",
        backgroundColor: props.color,
    }

    return <div style = {style}>
        {props.title}
    </div>
}
export default Boxes