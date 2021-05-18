
import React from "react";
import NavBar from "./NavBar";

const Header = () => {

    return (
        <div className="header">
            <NavBar />
            <div>
            <h1 className="mainTitle">Clean Blog</h1>
            <h2 className="mainSubtitle">A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}

export default Header;