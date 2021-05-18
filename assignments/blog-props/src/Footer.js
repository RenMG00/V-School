import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitterSquare, faGithub} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerTop">
                <a className="footerIcon" href="http://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="footerIcon" href="http://twitter.com"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                <a className="footerIcon" href="https://github.com"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div className="footerBottom">
                <p className="copyright">Copyright © Your Website 2019</p>
            </div>

        </div>
    )
}

export default Footer;