import React from "react"
import "./header.css"

const Header = () => {
    return (
        <header className="header">
                <a href="/" className="logo">Alex Fuller</a>
                <nav className="navbar">
                    <a href="/">About</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Services</a>
                    <button class="btn" href="/">Let's Connect!</button>
                </nav>
        </header>
    )
}

export default Header