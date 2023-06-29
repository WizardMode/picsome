import React from "react"
import icon from "../images/logo.png"

function Footer() {
    return (
        <footer>
            <a className="footer-link" href="https://leocreate.pythonanywhere.com/blog/">
                <img src={icon} class="icon" alt="icon"/>
                <p>Leonardo Ramirez 2023</p>
            </a>
        </footer>
    )
}

export default Footer