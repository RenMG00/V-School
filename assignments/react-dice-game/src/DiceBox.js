import React from "react";

const DiceBox = (props) => {
    const die = props.props.numArr.map(dice => {

        return (
        <div className="dieBox">
            <p className="dice">{dice}</p>
         </div>
         )

    })

    return (
        <p className="die">{die}</p>
    )
}
export default DiceBox;