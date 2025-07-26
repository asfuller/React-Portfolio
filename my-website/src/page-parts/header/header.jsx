import React, { useState, useEffect } from "react"
import "./header.css"
import { PopupButton } from "react-calendly"
import Link from 'react-router-dom'

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
                    <Link className="link" to="hi" smooth={true} offset={0} duration={500}>About</Link>
                    <Link className="link" to="recent projects" smooth={true} offset={0} duration={500}>Portfolio</Link>
                    <Link className="link" to="services" smooth={true} offset={0} duration={500}>Services</Link>
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