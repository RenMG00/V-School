import React from "react";

const dollarSigns = (cost) => {

    if (cost <= 500) {
        return "$"
    } else if (cost > 500 && cost < 1000) {
        return "$$"
    } else if (cost >= 1000) {
        return "$$$"
    }
}


const Card = (props) => {

    const signs = dollarSigns(props.vacationSpots.price)

    const styles = {
        textAlign: "center",
        fontSize: 20,
        width: 800,
        boxShadow: "2px 2px darkgray"
    }

    switch (props.vacationSpots.timeToGo) {
        case "Spring":
            styles.backgroundColor = "#FFD700"
            break;
        case "Summer":
            styles.backgroundColor = "#008000"
            break;
        case "Fall": 
            styles.backgroundColor = "brown"
            break;
        case "Winter":
            styles.backgroundColor = "#4682B4"
            break;
    }
    return (
        <div style={styles}>
            <h3 style = {{textShadow: "1px 1px gray"}}>{props.vacationSpots.place}</h3>
            <p>{props.vacationSpots.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} {signs}</p>
            <p>{props.vacationSpots.timeToGo}</p>
            <hr />
        </div>
    )
}

export default Card;
