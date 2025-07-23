import React, {useEffect} from "react";
import "./contact.css"
import { InlineWidget } from "react-calendly";

const Contact = () => {
    /*useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
        
        window.Calendly.initInlineWidget({
        url: "https://calendly.com/alexfuller0/30min",
        parentElement: document.getElementById("calendly-embed"),
        });
        }, []);*/
    return (
        <div className="contact">
            <h2 className="cotactHeader">Let's Connect!</h2>
            <InlineWidget className="calendly" url="https://calendly.com/alexfuller0/30min?hide_gdpr_banner=1" />
        </div>
    )
}

export default Contact