import React from "react";
import "./about.css"
import about_img from "../../assets/Alex-Fuller-Circle.png"
import { maxHeight } from "@mui/system";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about">
                <div className="aboutLeft">
                    <img src={about_img} alt="" className="about-img" />
                </div>
                <div className="aboutRight">
                    <h3>how it all started</h3>
                    <h2>A lifetime of fascination</h2>
                    <p className="about-text">
                    Since elementary school, I have always been fascinated with 
                    technology. My very first experience was creating a website 
                    using a CMS about former President Barack Obama (while he was 
                    running to become president) in 2008. There was background music 
                    (“A Change is Gonna Come” – Sam Cooke), with various images and 
                    text about him and his family. I had won my county’s Technology 
                    Fair with this, and ever since, I knew creating websites was what 
                    I wanted to do in life.
                    </p>
                    <p className="about-text">
                        On my free time,  I love to go fishing, hiking in nature’s 
                        beautiful wonders, and athletic activities such as tennis, 
                        running, and martial arts.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About