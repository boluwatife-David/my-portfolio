import React from "react";
import "./components/styles/style.css"
import { FaEnvelope } from "react-icons/fa";
import { FaArrowRight  } from "react-icons/fa";
import { FaRegMehRollingEyes  } from "react-icons/fa";
import { FaRegGrinBeam  } from "react-icons/fa";
export default function HeaderRoot() {
    return (
        <div className="img-header">
             <img/>
             <h1 className="header">HEYY!, WELCOME<span><FaRegMehRollingEyes /></span></h1>
             <p className="numbel">I am NUMB. <span className="lol">lol...</span></p>
             <div className="welcome">
                <p className="para3">Your're Welcome. <FaRegGrinBeam /></p>
                <button className="white-btn" type="button" title="Hire me please"><FaEnvelope /> Email</button>
                <button className="projects-btn" type="button"> Projects <FaArrowRight className="arrow"/> </button>
             </div>
        </div>
    )
}