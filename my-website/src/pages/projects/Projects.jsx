import React from "react"
import "./projects.css"
import garyProj from "../../assets/GSLLC.png"
import { maxHeight } from "@mui/system";
import AOS from 'aos';
import 'aos/dist/aos.css';

const project1Url = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

const Projects = () => {
    return (
            <div className="project-container">
                <div className="projects">
                    <h3 className="projects-title">Recent Projects</h3>
                    <div className="project1">
                        <div className="project-img">
                            <img src={garyProj} alt="" className="projectImg" />
                        </div>
                        <div className="project-text">
                            <h2 className="projectTitle">Gary Schoeniger LLC</h2>
                            <p className="projectText">
                                Gary Schoeniger, founder of the Entrepreneurial 
                                Learning Initiative (ELI), Gary has been a leading 
                                advocate for entrepreneurial mindset education in 
                                classrooms, organizations, and communities. He is an 
                                internationally recognized leader in entrepreneurial 
                                mindset education and professional development. His 
                                work focuses on redefining traditional concepts of 
                                entrepreneurship, emphasizing the mindset and behaviors 
                                that optimize engagement and unlock human potential. 
                                Described as someone who teaches with both intellect 
                                and heart, Gary brings a deeply human-centered approach 
                                to his work, inspiring others to rethink what it means 
                                to be innovative and entrepreneurial.
                            </p>
                            <h2>Skills Used</h2>
                            <p>
                                WordPress Custom Theme, Hosting Management, 
                                Bootstrap, CSS, HTML, JS, Software Integration
                            </p>
                            <button onClick={()=> window.open("https://garyschoeniger.com/", "_blank")} 
                                class="visit">Visit GSLLC</button>
                        </div>
                    </div>
                    <div className="project2"></div>
                    <div className="project3"></div>
                </div>

            </div>
    )
}

export default Projects