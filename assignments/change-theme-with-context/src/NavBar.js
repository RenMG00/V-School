import React from "react"
import {ThemeContextConsumer} from "./ThemeContext"

const NavBar = () => {
    return (
        <ThemeContextConsumer>
        {context => (
            <nav className={`${context.theme}-theme`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        )}
    </ThemeContextConsumer>
    )
}

export default NavBar