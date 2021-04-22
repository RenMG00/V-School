import React from "react";
import { ThemeContextConsumer } from "./ThemeContext"

const Main = (props) => {
    return (
        <ThemeContextConsumer>
            {context => (
                <main className={`${context.theme}-theme`}>{`${context.theme} Theme`}</main>
            )}
        </ThemeContextConsumer>
    )
}

export default Main;