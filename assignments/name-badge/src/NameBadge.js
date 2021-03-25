import React from "react";

const NameBadge = props => {

    return (
        <div className="badgeCard">
            <h3>Badge</h3>
            <div className="nameBadge">
            <div className="topBadgeDiv">
            <p>Name: {props.firstName + " " + props.lastName}</p>
            <p>Place of Birth: {props.birthPlace}</p>
            <p>Email: {props.email}</p>
            </div>
            <div tclassName="bottomBadgeDiv">
            <p>Phone: {props.phone}</p>
            <p>Favorite Food: {props.favFood}</p>
            </div>
            <br></br>
            </div>
            <textarea className="nameTextArea"
                readOnly="readonly"
                cols="68"
                rows="6">{props.aboutMe}
            </textarea>
        </div>
    )
}


export default NameBadge;