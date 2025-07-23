import React, { useState, useEffect } from "react"
import "./header.css"
import { PopupButton } from "react-calendly";

const Header = () => {
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])
    return (
        <header className={`header ${sticky? 'dark-nav' : ''}`}>
                <a href="/" className="logo">Alex Fuller</a>
                <nav className="navbar">
                    <a href="/">About</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Services</a>
                    <PopupButton className="btn"
                        url="https://calendly.com/alexfuller0/30min?hide_gdpr_banner=1"
                        rootElement={document.getElementById("root")}
                        text="Let's Connect!"
                    />
                </nav>
        </header>
    )
}

export default Header