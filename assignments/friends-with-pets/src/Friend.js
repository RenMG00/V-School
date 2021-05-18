import React from "react";
import Pet from "./Pet"
import friends from "./friends"

const Friend = (props) => {

     const petList = props.pets.map(pet => <Pet key={pet.name} {...pet}/>)
    
     return (
        <div style = {{
            marginTop: 5,
            padding: 5,
            border: "1px solid gray",
            width: 300,
            fontFamily: "cursive",
            backgroundColor: "whitesmoke"
        }}>
            <p style = {{
                paddingRight: 5,
                fontWeight: "bold"
            }}>{props.name}</p>
            <p> Age: {props.age}</p>
            <p style = {{
                textDecoration: "underline"
            }}>Pets:</p>
            {petList}
        </div>
    )
}



export default Friend;