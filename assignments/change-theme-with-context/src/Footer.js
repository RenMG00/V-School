import React from "react";
import { ThemeContextConsumer } from "./ThemeContext"

const Footer = (props) => {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}>The Amazing Footer</footer>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer;