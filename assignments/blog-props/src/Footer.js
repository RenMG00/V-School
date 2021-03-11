import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerTop">
                <a className="footerIcon" href="http://facebook.com">facebook</a>
                <a className="footerIcon" href="http://twitter.com">twitter</a>
                <a className="footerIcon" href="https://github.com">github</a>
            </div>
            <div className="footerBottom">
                <p className="copyright">Copyright © Your Website 2019</p>
            </div>

        </div>
    )
}

export default Footer;