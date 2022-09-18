import React from "react";
import "../styles/style.css"
import { FaEnvelope } from "react-icons/fa";
import { FaArrowRight  } from "react-icons/fa";
import { FaRegMehRollingEyes  } from "react-icons/fa";
import { FaRegGrinBeam  } from "react-icons/fa";
export default function HeaderRoot() {
    const welcomeUser = "HEYYY, WELCOME"
    const me = " I am NUMB."

    return (
        <div className="img-header">
             <h1 className="header"><FaRegMehRollingEyes className="emoji"/></h1>
             <h1 className="header"><span>{welcomeUser} {me}</span></h1>
             <p className="numbel"> <span className="lol">lol...</span></p>
             <div className="welcome">
                <p className="para3">Your're Welcome. <FaRegGrinBeam className="emoji"/></p>
                <button className="white-btn" type="button" title="Hire me please"><FaEnvelope /> Email</button>
                <button className="projects-btn" type="button"> Projects <FaArrowRight className="arrow"/> </button>
             </div>
        </div>
    )
}