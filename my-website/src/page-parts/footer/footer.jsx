import React from "react";
import "./footer.css"
import githubIcon from "../../assets/GitHub_Invertocat_Light.png"
import linkedIcon from "../../assets/InBug-White.png"

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">© 2025 | Alex Fuller</p>
            <div className="icons">
                <a onClick={()=> window.open("https://github.com/asfuller", "_blank")} ><img src={githubIcon} alt="" /></a>
                <a onClick={()=> window.open("https://www.linkedin.com/in/alexandriasfuller/", "_blank")}><img src={linkedIcon} alt="" /></a>
            </div>
        </footer>
    )
}

export default Footer