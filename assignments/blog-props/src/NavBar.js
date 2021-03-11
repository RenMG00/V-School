import React from "react";

const NavBar = () => {

    return (
        <div className="navbar">
            <div className="bootstrapContainer">
            <a className="bootstrap" href="#startupBoostrap">Start Bootstrap</a>
            </div>
            <div className="navIcons">
            <a className="navIcon" href="home">HOME</a>
            <a className="navIcon" href="about">ABOUT</a>
            <a className="navIcon" href="sample-post">SAMPLE POST</a>
            <a className="navIcon" href="contact">CONTACT</a>
            </div>
        </div>
    )
}

export default NavBar;