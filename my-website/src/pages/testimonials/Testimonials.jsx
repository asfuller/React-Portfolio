import React from "react";
import "./testimonials.css"
import garyHeadshot from "../../assets/garyPhoto.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Testimonials = () => {
    return (
        <div className="content">
            <div className="testimonials-container">
                <div className="testimonials">
                    <Card className="cards" sx={{ width: 800, height: 300 }}>
                        <CardContent className="testimony-content">
                            <img src= {garyHeadshot} alt="Gary Schoeniger Headshot" />
                            <div className="testimonialText">
                                <p>Alex Fuller is a quiet force in the world of IT—thoughtful, 
                                    steady, and always reliable. She works behind the scenes 
                                    to keep systems running smoothly, often solving complex 
                                    issues before anyone even knows there's a problem. She's 
                                    not afraid to tackle difficult challenges and consistently 
                                    delivers smart, effective solutions. If you want someone 
                                    who gets things done without the drama, Alex is the one 
                                    you want on your team.</p>
                                <h3>—Gary G. Schoeniger, Founder and CEO of The Entrepreneurial Learning Initiative </h3>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Testimonials