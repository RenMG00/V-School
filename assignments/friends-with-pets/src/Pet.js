import React from "react";
import friends from "./friends"

const Pet = (props) => {

    return (
        <div style={{
            display: "flex",
            fontFamily: "cursive",
            fontSize: 15,
        }}>
            <h3 style={{
                marginTop: 0,
                fontSize: 15
            }}>{props.name}</h3>
            <p style={{
                marginTop: 2,
                marginLeft: 5,
                fontSize: 12,
                fontFamily: "cursive"
            }}>:{props.breed}</p>
        </div>
    )
}



export default Pet;