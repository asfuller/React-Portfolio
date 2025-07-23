import React from "react"
import "./home.css"
import About from "../about/About";
import Projects from "../projects/Projects";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/CardContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { maxHeight } from "@mui/system";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "../contact/Contact";
import { useEffect } from "react"

AOS.init();

const Home = () => {
    return (
        <div className="content">
            <div className="hero container">
                <div className="hero-text">
                    <h1 className="title">Alex Fuller</h1>
                    <p className="subtitle">WordPress Developer | Tech Admin | 
                    AI Enthusiast</p>
                    <button className="primary-btn">View my portfolio</button>
                    <button className="secondary-btn">Hire me</button>
                </div>
            </div>
            
            <div className="container">
                <div className="introduction" data-aos="fade-in"
                data-aos-duration="2000">
                    <h3 className="subtext">Hi, my name is Alex,</h3>
                    <h2 className="h2-title">I am a Software Developer and WordPress 
                    expert with 5+ years of experience</h2>
                </div>
            </div>

            <div data-aos="fade-in"
                data-aos-duration="2000"><About/></div>

            <div className="container-serv">
                <div className="services" data-aos="fade-in"
                data-aos-duration="2000">
                    <h3 className="subtext">Services</h3>
                    <h2 className="h2-title">Solutions Built for Growth</h2>
                    <p>With over 5 years of hands-on 
                        experience, I specialize in building high-performance 
                        WordPress websites tailored to business needs. From custom 
                        themes and plugin development to speed optimization, API 
                        integrations, and security hardening—I deliver scalable, 
                        maintainable solutions that empower content teams and 
                        engage users. Whether you’re running a corporate site, 
                        membership platform, or eCommerce store, I bring deep 
                        technical expertise and a problem-solving mindset to every 
                        project.
                    </p>

                    <div className="service-cards">
                        <Card className="cards" sx={{ maxWidth: 280, height: 250,
                        ':hover': {
                            boxShadow: 20, // theme.shadows[20]
                          },}}
                        style={{backgroundColor: "#1a202c"}}>
                            <CardContent className="card-content">
                                <svg xmlns="http://www.w3.org/2000/svg" height="50" 
                                    width="50" viewBox="0 0 512 512"><path fill="#fff"
                                    d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 
                                    38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 
                                    363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 
                                    16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 
                                    1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 
                                    432 141.4L256 66.8s0 0 0 0z"/></svg>
                                    <h4 className="card-title">SEO & Security</h4>
                                    <p className="card-descr">Yoast SEO, 
                                    WCAG/508 Standards, Google Analytics, 
                                    PHP upgrades</p>
                                </CardContent>
                            </Card>
                            <Card className="cards" sx={{ maxWidth: 280, height: 250,
                            ':hover': {
                                boxShadow: 20, // theme.shadows[20]
                              },}}
                            style={{backgroundColor: "#1a202c"}}>
                                <CardContent className="card-content">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    height="50" width="50" viewBox="0 0 640 512">
                                    <path fill="#fff" d="M64 96c0-35.3 
                                    28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 
                                    256-64 0 0-256L128 96l0 256-64 0L64 96zM0 
                                    403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 
                                    19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 
                                    76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 
                                    209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 
                                    9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 
                                    0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 
                                    33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 
                                    48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 
                                    0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 
                                    0-33.9s24.6-9.4 33.9 0z"/></svg>
                                        <h4 className="card-title">Full stack 
                                        development</h4>
                                        <p className="card-descr">Git, PHP, MySQL, 
                                        HTML, SCSS, CSS, Javascript, AWS Cloud, 
                                        CLI</p>
                                </CardContent>
                            </Card>
                            <Card className="cards" sx={{ maxWidth: 280, height: 250,
                            ':hover': {
                                boxShadow: 20, // theme.shadows[20]
                              }, }}
                            style={{backgroundColor: "#1a202c"}}>
                                <CardContent className="card-content">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    height="50" width="50" viewBox="0 0 512 512">
                                    <path fill="#fff" d="M278.6 
                                    9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 
                                    9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 
                                    0 96-96 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 
                                    6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 
                                    22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 96 0 0 96-32 
                                    0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 
                                    64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 
                                    11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 
                                    0-96 96 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 
                                    2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 
                                    0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 
                                    16.6-19.8 29.6l0 32-96 0 0-96 32 0c12.9 0 
                                    24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"/></svg>
                                    <h4 className="card-title">system migrations</h4>
                                    <p className="card-descr">Roadmapping, 
                                    AWS migration, WordPress Migration tools, Data 
                                    Mapping</p>
                                </CardContent>
                            </Card>
                        </div>
                </div>
            </div>
            <div data-aos="fade-in"
                data-aos-duration="2000"><Projects/>
            </div>
            <div data-aos="fade-in"
                data-aos-duration="2000"><Contact/>
            </div>
        </div>
    )
}

export default Home